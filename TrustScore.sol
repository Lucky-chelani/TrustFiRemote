// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TrustScore {
    struct User {
        uint8 incomeLevel;         // 0 to 4
        uint8 socialMedia;         // 0 to 3
        uint8 incomeExpenseRatio;  // 0 to 4
        uint8 creditHistory;       // 0 to 5
        uint8 lenderFeedback;      // 0 to 5
        uint8 trustworthiness;     // 0 to 4
        bool exists;               // Check if user exists
    }
    
    mapping(address => User) public users;
    
    event UserDataUpdated(address indexed user);
    event TrustScoreCalculated(address indexed user, uint8 totalScore, uint256 trustScorePercentage);
    
    modifier validScores(
        uint8 _incomeLevel,
        uint8 _socialMedia,
        uint8 _incomeExpenseRatio,
        uint8 _creditHistory,
        uint8 _lenderFeedback,
        uint8 _trustworthiness
    ) {
        require(_incomeLevel <= 4, "Invalid income level");
        require(_socialMedia <= 3, "Invalid social media score");
        require(_incomeExpenseRatio <= 4, "Invalid income-expense ratio");
        require(_creditHistory <= 5, "Invalid credit history");
        require(_lenderFeedback <= 5, "Invalid lender feedback");
        require(_trustworthiness <= 4, "Invalid trustworthiness score");
        _;
    }
    
    function setUserData(
        uint8 _incomeLevel,
        uint8 _socialMedia,
        uint8 _incomeExpenseRatio,
        uint8 _creditHistory,
        uint8 _lenderFeedback,
        uint8 _trustworthiness
    ) public validScores(_incomeLevel, _socialMedia, _incomeExpenseRatio, _creditHistory, _lenderFeedback, _trustworthiness) {
        users[msg.sender] = User(
            _incomeLevel,
            _socialMedia,
            _incomeExpenseRatio,
            _creditHistory,
            _lenderFeedback,
            _trustworthiness,
            true
        );
        emit UserDataUpdated(msg.sender);
    }
    
    function calculateTrustScore(address userAddress) public view returns (uint8, uint256) {
        require(users[userAddress].exists, "User data not found");
        
        User memory user = users[userAddress];
        uint8 totalScore = user.incomeLevel + user.socialMedia + user.incomeExpenseRatio + user.creditHistory + user.lenderFeedback + user.trustworthiness;
        uint256 trustScorePercentage = (uint256(totalScore) * 100) / 25;
        
        return (totalScore, trustScorePercentage);
    }
    
    function getTrustScore() public returns (uint8, uint256) {
        (uint8 score, uint256 percentage) = calculateTrustScore(msg.sender);
        emit TrustScoreCalculated(msg.sender, score, percentage);
        return (score, percentage);
    }
}