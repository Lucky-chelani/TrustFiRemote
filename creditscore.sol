
//0x27c1d1fa50ce12e2dae1dbb9154a05eb31035f06
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CreditScoring {
    struct User {
        address userAddress;
        uint256 creditScore;
        uint256 totalRepaid;
        uint256 totalLoansTaken;
        bool isRegistered;
    }

    struct LoanRequest {
        address borrower;
        uint256 amount;
        bool approved;
        bool repaid;
    }

    mapping(address => User) public users;
    LoanRequest[] public loanRequests;

    event UserRegistered(address user);
    event CreditScoreUpdated(address user, uint256 newScore);
    event LoanRequested(address borrower, uint256 amount, uint256 requestId);
    event LoanApproved(uint256 requestId, address lender);
    event LoanRepaid(uint256 requestId, address borrower);

    modifier onlyRegistered() {
        require(users[msg.sender].isRegistered, "User not registered");
        _;
    }

    // 📌 Register a new user
    function registerUser() public {
        require(!users[msg.sender].isRegistered, "User already registered");
        users[msg.sender] = User(msg.sender, 500, 0, 0, true); // Default credit score 500
        emit UserRegistered(msg.sender);
    }

    // 📌 Request a Loan
    function requestLoan(uint256 amount) public onlyRegistered {
        loanRequests.push(LoanRequest(msg.sender, amount, false, false));
        emit LoanRequested(msg.sender, amount, loanRequests.length - 1);
    }

    // 📌 Approve a Loan (Simulating Lender Approval)
    function approveLoan(uint256 requestId) public {
        require(requestId < loanRequests.length, "Invalid loan request ID");
        require(!loanRequests[requestId].approved, "Loan already approved");

        loanRequests[requestId].approved = true;
        emit LoanApproved(requestId, msg.sender);
    }

    // 📌 Repay a Loan and Update Credit Score
    function repayLoan(uint256 requestId) public onlyRegistered {
        require(requestId < loanRequests.length, "Invalid loan request ID");
        require(loanRequests[requestId].borrower == msg.sender, "Not your loan");
        require(loanRequests[requestId].approved, "Loan not approved yet");
        require(!loanRequests[requestId].repaid, "Loan already repaid");

        loanRequests[requestId].repaid = true;
        users[msg.sender].totalRepaid += loanRequests[requestId].amount;
        users[msg.sender].totalLoansTaken += 1;

        // 📌 Increase credit score based on repayment
        users[msg.sender].creditScore += 20;
        emit CreditScoreUpdated(msg.sender, users[msg.sender].creditScore);
        emit LoanRepaid(requestId, msg.sender);
    }

    // 📌 Get User Credit Score
    function getCreditScore(address user) public view returns (uint256) {
        require(users[user].isRegistered, "User not registered");
        return users[user].creditScore;
    }
}
