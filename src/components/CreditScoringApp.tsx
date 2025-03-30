import { useState } from "react";

declare global {
  interface Window {
    ethereum?: any;
  }
}
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { BrowserProvider, Contract } from "ethers";
import contractABI from "./CreditScoringABI.json";

const CONTRACT_ADDRESS = "0x214a4de18a500e643b1ecb84fe960d4a745afaf3";

export const CreditScoringApp = () => {
  const [account, setAccount] = useState(null);   // State to store the connected wallet address
  const [creditScore, setCreditScore] = useState(null);
  const [loanAmount, setLoanAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [contract, setContract] = useState(null);

  async function connectWallet() {
    setIsLoading(true);
    try {
      if (!window.ethereum) {
        toast.error("Please install MetaMask to use this feature");
        return;
      }
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const userAccount = await signer.getAddress();
      setAccount(userAccount);
      
      const contractInstance = new Contract(CONTRACT_ADDRESS, contractABI, signer);
      setContract(contractInstance);
      
      const score = await contractInstance.getCreditScore(userAccount);
      setCreditScore(score.toNumber());
      toast.success("Wallet connected successfully");
    } catch (error) {
      console.error("Connection failed:", error);
      toast.error("Connection failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  async function registerUser() {
    if (!contract) {
      toast.error("Please connect your wallet first");
      return;
    }
    setIsLoading(true);
    try {
      const tx = await contract.registerUser();
      await tx.wait();
      toast.success("Registration successful!");
      
      const score = await contract.getCreditScore(account);
      setCreditScore(score.toNumber());
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }
  async function requestLoan() {
    if (!contract) {
      toast.error("Please connect your wallet first");
      return;
    }
    if (loanAmount <= 0) {
      toast.error("Please enter a valid loan amount");
      return;
    }
    setIsLoading(true);
    try {
      const tx = await contract.requestLoan(loanAmount);
      await tx.wait();
      toast.success(`Loan request for ${loanAmount} submitted successfully!`);
      setLoanAmount(0); // Clear the loan amount field
    } catch (error) {
      console.error("Loan request failed:", error);
      toast.error("Loan request failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="shadow-lg border-2 border-gray-100">
        <CardHeader className="text-center pb-2">
          <Wallet className="text-black mx-auto" size={40} />
          <CardTitle className="text-2xl font-bold">Trust Score Rating</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
  {account ? (
    <>
      <p className="font-mono text-sm">Connected: {account}</p>
      {creditScore !== null && (
        <p className="text-lg font-bold">Credit Score: {creditScore}</p>
      )}
      <Input 
        type="number" 
        placeholder="Loan Amount" 
        value={loanAmount || ''} 
        onChange={(e) => setLoanAmount(Number(e.target.value))} 
      />
      <div className="flex justify-center">
        <Button onClick={requestLoan} disabled={isLoading} className="bg-black hover:bg-gray-900">
          Request Loan <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </>
  ) : (
    <div className="flex justify-center">
      <Button onClick={connectWallet} disabled={isLoading} className="bg-black hover:bg-gray-900">
        {isLoading ? "Connecting..." : "Connect Wallet"} <Wallet size={16} className="ml-2" />
      </Button>
    </div>
  )}
</CardContent>
       
      </Card>
    </div>
  );
};

export default CreditScoringApp;