
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, ArrowRight, Check, Plus } from "lucide-react";
import { toast } from "sonner";

// Placeholder for actual implementation
// In a real implementation, you would import ethers and use the contract
const CONTRACT_ADDRESS = "0x214a4de18a500e643b1ecb84fe960d4a745afaf3";

export const CreditScoringApp = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [creditScore, setCreditScore] = useState<number | null>(null);
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // We're not auto-connecting on load to give users control
  }, []);

  async function connectWallet() {
    setIsLoading(true);
    try {
      // Placeholder for actual implementation
      // In a real implementation, you would use ethers.js to connect
      setTimeout(() => {
        setAccount("0x7A6...F3c2");
        setCreditScore(720);
        setIsLoading(false);
        toast.success("Wallet connected successfully");
      }, 1000);
    } catch (error) {
      console.error("Connection failed:", error);
      toast.error("Please install MetaMask to use this feature");
      setIsLoading(false);
    }
  }

  async function registerUser() {
    if (!account) {
      toast.error("Please connect your wallet first");
      return;
    }
    
    setIsLoading(true);
    try {
      // Placeholder for actual implementation
      setTimeout(() => {
        setCreditScore(650);
        setIsLoading(false);
        toast.success("Registration successful!");
      }, 1000);
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed. Please try again.");
      setIsLoading(false);
    }
  }

  async function requestLoan() {
    if (!account) {
      toast.error("Please connect your wallet first");
      return;
    }
    
    if (loanAmount <= 0) {
      toast.error("Please enter a valid loan amount");
      return;
    }
    
    setIsLoading(true);
    try {
      // Placeholder for actual implementation
      setTimeout(() => {
        setIsLoading(false);
        toast.success(`Loan request for ${loanAmount} submitted successfully!`);
      }, 1000);
    } catch (error) {
      console.error("Loan request failed:", error);
      toast.error("Loan request failed. Please try again.");
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="shadow-lg border-2 border-gray-100">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto bg-gradient-to-br from-brand-blue to-brand-teal w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <Wallet className="text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">FairCredit Scoring</CardTitle>
          <CardDescription>Access fair financial services with blockchain</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          {account ? (
            <div className="space-y-4">
              <div className="bg-muted rounded-md p-4">
                <p className="text-sm mb-1">Connected Wallet</p>
                <p className="font-mono text-xs">{account}</p>
              </div>
              
              {creditScore !== null && (
                <div className="bg-gradient-to-r from-brand-blue to-brand-teal p-4 rounded-md text-white">
                  <p className="text-sm mb-1">Your Credit Score</p>
                  <p className="text-3xl font-bold">{creditScore}</p>
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="loanAmount">Loan Amount</Label>
                <div className="flex space-x-2">
                  <Input 
                    id="loanAmount"
                    type="number" 
                    placeholder="Enter amount" 
                    value={loanAmount || ''} 
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                  />
                  <Button 
                    onClick={requestLoan} 
                    disabled={isLoading}
                    className="bg-brand-blue hover:bg-brand-blue/90"
                  >
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-4">
              <Button 
                onClick={connectWallet} 
                disabled={isLoading} 
                className="w-full bg-brand-blue hover:bg-brand-blue/90"
              >
                {isLoading ? "Connecting..." : "Connect Wallet"}
                <Wallet size={16} className="ml-2" />
              </Button>
            </div>
          )}
        </CardContent>
        <CardFooter>
          {account ? (
            <Button 
              onClick={registerUser} 
              disabled={isLoading} 
              variant="outline" 
              className="w-full"
            >
              {creditScore === null ? "Register for Credit Score" : "Update Credit Score"}
              {creditScore === null ? <Plus size={16} className="ml-2" /> : <Check size={16} className="ml-2" />}
            </Button>
          ) : (
            <p className="text-xs text-muted-foreground text-center w-full">
              Connect your wallet to access decentralized financial services
            </p>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreditScoringApp;
