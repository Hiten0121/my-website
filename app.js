// Enhanced Application Data with Voice Commands and User Authentication
const applicationData = {
  // Voice commands for AI assistant
  voiceCommands: [
    {
      phrases: ["book train", "book a train", "i want to book", "help me book", "booking"],
      action: "openBooking",
      response: "Sure! Let me help you book a train. I'm taking you to the booking section where you can search for trains between your desired stations."
    },
    {
      phrases: ["show tickets", "my tickets", "show my bookings", "my bookings", "profile", "dashboard"],
      action: "showProfile",
      response: "Here's your profile with all your train bookings and tickets!"
    },
    {
      phrases: ["track train", "where is my train", "train location", "live tracking", "track"],
      action: "openTracking",
      response: "I'll help you track your train. Let me take you to the live tracking section where you can check real-time train status."
    },
    {
      phrases: ["pnr status", "check pnr", "pnr", "ticket status"],
      action: "openPNR",
      response: "I'll help you check your PNR status. Enter your 10-digit PNR number to get the latest ticket information."
    },
    {
      phrases: ["uts booking", "uts", "local train", "suburban train"],
      action: "openUTS",
      response: "I'll take you to UTS booking for local and suburban trains."
    },
    {
      phrases: ["help", "help me", "what can you do", "commands"],
      action: "showHelp",
      response: "I can help you with:\n• Book trains - 'book train'\n• Show your tickets - 'my bookings'\n• Track trains - 'track train'\n• Check PNR status - 'pnr status'\n• UTS booking - 'uts booking'\n• Go to home - 'take me home'\n\nJust speak naturally and I'll understand!"
    },
    {
      phrases: ["take me home", "go home", "home page", "home"],
      action: "goHome",
      response: "Taking you back to the home page!"
    },
    {
      phrases: ["login", "log in", "sign in"],
      action: "showLogin",
      response: "I'll open the login form for you."
    },
    {
      phrases: ["register", "sign up", "create account"],
      action: "showRegister", 
      response: "I'll open the registration form to create a new account."
    }
  ],

  // User profile data
  profileData: {
    stats: {
      totalBookings: 12,
      upcomingJourneys: 2,
      totalSpent: 15630
    },
    recentBookings: [
      {
        pnr: "2345678901",
        trainName: "Mumbai Rajdhani Express",
        route: "Mumbai Central → New Delhi",
        date: "2025-10-15",
        amount: 3700,
        status: "confirmed"
      },
      {
        pnr: "1234567890",
        trainName: "Shatabdi Express", 
        route: "New Delhi → Mumbai Central",
        date: "2025-10-02",
        amount: 1500,
        status: "completed"
      },
      {
        pnr: "3456789012",
        trainName: "Kerala Express",
        route: "New Delhi → Chennai Central",
        date: "2025-09-20",
        amount: 2850,
        status: "completed"
      }
    ],
    savedPassengers: [
      {
        id: 1,
        name: "Rahul Sharma",
        age: 32,
        gender: "Male",
        phone: "+91 9876543210"
      },
      {
        id: 2,
        name: "Priya Sharma",
        age: 28,
        gender: "Female", 
        phone: "+91 9876543211"
      }
    ]
  },

  stations: [
    {"code": "NDLS", "name": "New Delhi", "city": "Delhi", "state": "Delhi"},
    {"code": "CSMT", "name": "Chhatrapati Shivaji Maharaj Terminus", "city": "Mumbai", "state": "Maharashtra"},
    {"code": "BCT", "name": "Mumbai Central", "city": "Mumbai", "state": "Maharashtra"},
    {"code": "MAO", "name": "Madgaon", "city": "Goa", "state": "Goa"},
    {"code": "BRC", "name": "Vadodara Junction", "city": "Vadodara", "state": "Gujarat"},
    {"code": "PUNE", "name": "Pune Junction", "city": "Pune", "state": "Maharashtra"},
    {"code": "KYN", "name": "Kalyan Junction", "city": "Kalyan", "state": "Maharashtra"},
    {"code": "TNA", "name": "Thane", "city": "Thane", "state": "Maharashtra"},
    {"code": "DADR", "name": "Dadar", "city": "Mumbai", "state": "Maharashtra"},
    {"code": "BYC", "name": "Byculla", "city": "Mumbai", "state": "Maharashtra"},
    {"code": "RTM", "name": "Ratlam Junction", "city": "Ratlam", "state": "Madhya Pradesh"},
    {"code": "NAD", "name": "Nagda Junction", "city": "Nagda", "state": "Madhya Pradesh"},
    {"code": "JBP", "name": "Jabalpur", "city": "Jabalpur", "state": "Madhya Pradesh"},
    {"code": "AGC", "name": "Agra Cantt", "city": "Agra", "state": "Uttar Pradesh"},
    {"code": "GWL", "name": "Gwalior", "city": "Gwalior", "state": "Madhya Pradesh"},
    {"code": "KOAA", "name": "Kolkata", "city": "Kolkata", "state": "West Bengal"},
    {"code": "HWH", "name": "Howrah Junction", "city": "Kolkata", "state": "West Bengal"},
    {"code": "BBS", "name": "Bhubaneswar", "city": "Bhubaneswar", "state": "Odisha"},
    {"code": "MAS", "name": "Chennai Central", "city": "Chennai", "state": "Tamil Nadu"},
    {"code": "BLR", "name": "Bangalore City", "city": "Bangalore", "state": "Karnataka"}
  ],
  
  // Enhanced train database with complete routes
  trains: [
    {
      "number": "12951",
      "name": "Mumbai Rajdhani Express",
      "type": "Rajdhani",
      "route": ["BCT", "BRC", "RTM", "NAD", "GWL", "AGC", "NDLS"],
      "stationNames": ["Mumbai Central", "Vadodara Junction", "Ratlam Junction", "Nagda Junction", "Gwalior", "Agra Cantt", "New Delhi"],
      "departure": "16:35",
      "arrival": "08:35+1",
      "duration": "16:00",
      "days": "Daily",
      "currentLocation": {
        "station": "Ratlam Junction",
        "code": "RTM",
        "index": 2
      },
      "coaches": [
        {"code": "1A", "name": "AC 1st Class", "seats": 22, "fare": 4500, "layoutAvailable": true},
        {"code": "2A", "name": "AC 2-Tier", "seats": 46, "fare": 1850, "layoutAvailable": true},
        {"code": "3A", "name": "AC 3-Tier", "seats": 64, "fare": 1200, "layoutAvailable": true},
        {"code": "SL", "name": "Sleeper", "seats": 72, "fare": 420, "layoutAvailable": true},
        {"code": "GS", "name": "Gerenal", "layoutAvailable": false}
      ]
    },
    {
      "number": "12009",
      "name": "Shatabdi Express",
      "type": "Shatabdi", 
      "route": ["NDLS", "AGC", "GWL", "JBP", "NAD", "BRC", "BCT"],
      "stationNames": ["New Delhi", "Agra Cantt", "Gwalior", "Jabalpur", "Nagda Junction", "Vadodara Junction", "Mumbai Central"],
      "departure": "06:00",
      "arrival": "21:50", 
      "duration": "15:50",
      "days": "Daily Ex Sun",
      "currentLocation": {
        "station": "Vadodara Junction",
        "code": "BRC",
        "index": 5
      },
      "coaches": [
        {"code": "CC", "name": "AC Chair Car", "seats": 75, "fare": 1500, "layoutAvailable": true},
        {"code": "EC", "name": "Executive Chair", "seats": 46, "fare": 750, "layoutAvailable": true},
        {"code": "GS", "name": "Gerenal", "layoutAvailable": false}
      ]
    },
    {
      "number": "12618",
      "name": "Mangala Lakshadweep Express",
      "type": "Express",
      "route": ["NDLS", "AGC", "GWL", "NAD", "BRC", "PUNE", "MAO"],
      "stationNames": ["New Delhi", "Agra Cantt", "Gwalior", "Nagda Junction", "Vadodara Junction", "Pune Junction", "Madgaon"],
      "departure": "20:15",
      "arrival": "18:30+2",
      "duration": "22:15",
      "days": "Tue, Thu, Sun",
      "currentLocation": {
        "station": "Nagda Junction",
        "code": "NAD",
        "index": 3
      },
      "coaches": [
        {"code": "2A", "name": "AC 2-Tier", "seats": 46, "fare": 1650, "layoutAvailable": true},
        {"code": "3A", "name": "AC 3-Tier", "seats": 64, "fare": 1100, "layoutAvailable": true},
        {"code": "SL", "name": "Sleeper", "seats": 72, "fare": 485, "layoutAvailable": true},
        {"code": "GS", "name": "Gerenal", "layoutAvailable": false}
      ]
    },
    {
      "number": "12002",
      "name": "New Delhi Bhopal Shatabdi",
      "type": "Shatabdi",
      "route": ["NDLS", "GWL", "JBP"],
      "stationNames": ["New Delhi", "Gwalior", "Jabalpur"],
      "departure": "06:15",
      "arrival": "14:00",
      "duration": "07:45",
      "days": "Daily Ex Wed",
      "currentLocation": {
        "station": "Gwalior",
        "code": "GWL", 
        "index": 1
      },
      "coaches": [
        {"code": "CC", "name": "AC Chair Car", "seats": 78, "fare": 1250, "layoutAvailable": true},
        {"code": "EC", "name": "Executive Chair", "seats": 46, "fare": 685, "layoutAvailable": true},
        {"code": "GS", "name": "Gerenal", "layoutAvailable": false}
      ]
    },
    {
      "number": "56789",
      "name": "Mumbai Local",
      "type": "Local",
      "route": ["CSMT", "BYC", "DADR", "TNA", "KYN"],
      "stationNames": ["CST Mumbai", "Byculla", "Dadar", "Thane", "Kalyan Junction"],
      "departure": "08:15",
      "arrival": "09:30", 
      "duration": "01:15",
      "days": "Daily",
      "currentLocation": {
        "station": "Dadar",
        "code": "DADR",
        "index": 2
      },
      "coaches": [
        {"code": "GS", "name": "General Second", "layoutAvailable": false},
        {"code": "SL", "name": "Second Class", "seats": 72, "fare": 25, "layoutAvailable": true},
        {"code": "CC", "name": "AC Chair Car", "seats": 78, "fare": 685, "layoutAvailable": true},
      ]
    },
    {
      "number": "12625",
      "name": "Kerala Express",
      "type": "Express",
      "route": ["NDLS", "AGC", "BRC", "PUNE", "BLR", "MAS"],
      "stationNames": ["New Delhi", "Agra Cantt", "Vadodara Junction", "Pune Junction", "Bangalore City", "Chennai Central"],
      "departure": "11:55",
      "arrival": "04:30+2",
      "duration": "40:35",
      "days": "Daily",
      "currentLocation": {
        "station": "Pune Junction",
        "code": "PUNE",
        "index": 3
      },
      "coaches": [
        {"code": "2A", "name": "AC 2-Tier", "seats": 46, "fare": 2850, "layoutAvailable": true},
        {"code": "3A", "name": "AC 3-Tier", "seats": 64, "fare": 1980, "layoutAvailable": true},
        {"code": "SL", "name": "Sleeper", "seats": 72, "fare": 685, "layoutAvailable": true},
        {"code": "GS", "name": "Gerenal", "layoutAvailable": false}
      ]
    }
  ],
  
  // Enhanced tracking data with complete route information
  enhancedTrackingData: [
    {
      "trainNo": "12951",
      "trainName": "Mumbai Rajdhani Express", 
      "route": "Mumbai Central → New Delhi",
      "currentStation": "Ratlam Junction",
      "currentStationCode": "RTM",
      "nextStation": "Nagda Junction",
      "nextStationCode": "NAD", 
      "delay": "Delayed by 45 min",
      "delayMinutes": 45,
      "status": "delayed",
      "speed": "85 km/h",
      "distanceCovered": "456 km",
      "lastUpdated": "2 min ago",
      "routeStations": [
        {"code": "BCT", "name": "Mumbai Central", "time": "16:35", "status": "departed", "platform": "1", "delay": "0"},
        {"code": "BRC", "name": "Vadodara Junction", "time": "20:17", "status": "departed", "platform": "3", "delay": "15"}, 
        {"code": "RTM", "name": "Ratlam Junction", "time": "01:30", "status": "current", "platform": "2", "delay": "45"},
        {"code": "NAD", "name": "Nagda Junction", "time": "14:32", "status": "expected", "platform": "1", "delay": "45"},
        {"code": "GWL", "name": "Gwalior", "time": "05:45", "status": "expected", "platform": "2", "delay": "45"},
        {"code": "AGC", "name": "Agra Cantt", "time": "07:20", "status": "expected", "platform": "4", "delay": "45"},
        {"code": "NDLS", "name": "New Delhi", "time": "08:35", "status": "expected", "platform": "16", "delay": "45"}
      ]
    }
  ],

  // Enhanced UTS quota options (removed standalone Child)
  quotaOptions: [
    {"code": "GN", "name": "General", "description": "General quota for all passengers", "discount": 0},
    {"code": "LD", "name": "Ladies", "description": "Ladies quota for female passengers", "discount": 0},
    {"code": "SS", "name": "Senior Citizen", "description": "Senior citizen quota (60+ years)", "discount": 40},
    {"code": "HP", "name": "Handicapped", "description": "Physically handicapped quota", "discount": 75},
    {"code": "ST", "name": "Student", "description": "Student quota with valid ID", "discount": 25}
  ],

  // Enhanced fare structure with per-km calculation
  fareStructure: {
    "firstClass": {"baseFare": 10, "perKm": 1},  // ₹10 per 10km
    "secondClass": {"baseFare": 10, "perKm": 1}, // Same base calculation
    "childDiscountPercentage": 50, // Child fare is 50% of adult
    "taxes": {"gst": 0.05, "serviceFee": 10, "bookingCharge": 40}
  },

  // Enhanced seat layouts with more detailed information
  seatLayouts: {
    "3A": {
      "name": "AC 3-Tier",
      "totalSeats": 64,
      "available": true,
      "layout": [
        {"bay": 1, "seats": [{"no": 1, "type": "LOWER"}, {"no": 2, "type": "MIDDLE"}, {"no": 3, "type": "UPPER"}], "side": [{"no": 7, "type": "S.LOWER"}]},
        {"bay": 2, "seats": [{"no": 4, "type": "LOWER"}, {"no": 5, "type": "MIDDLE"}, {"no": 6, "type": "UPPER"}], "side": [{"no": 8, "type": "S.UPPER"}]},
        {"bay": 3, "seats": [{"no": 9, "type": "LOWER"}, {"no": 10, "type": "MIDDLE"}, {"no": 11, "type": "UPPER"}], "side": [{"no": 15, "type": "S.LOWER"}]},
        {"bay": 4, "seats": [{"no": 12, "type": "LOWER"}, {"no": 13, "type": "MIDDLE"}, {"no": 14, "type": "UPPER"}], "side": [{"no": 16, "type": "S.UPPER"}]},
        {"bay": 5, "seats": [{"no": 17, "type": "LOWER"}, {"no": 18, "type": "MIDDLE"}, {"no": 19, "type": "UPPER"}], "side": [{"no": 23, "type": "S.LOWER"}]},
        {"bay": 6, "seats": [{"no": 20, "type": "LOWER"}, {"no": 21, "type": "MIDDLE"}, {"no": 22, "type": "UPPER"}], "side": [{"no": 24, "type": "S.UPPER"}]},
        {"bay": 7, "seats": [{"no": 25, "type": "LOWER"}, {"no": 26, "type": "MIDDLE"}, {"no": 27, "type": "UPPER"}], "side": [{"no": 31, "type": "S.LOWER"}]},
        {"bay": 8, "seats": [{"no": 28, "type": "LOWER"}, {"no": 29, "type": "MIDDLE"}, {"no": 30, "type": "UPPER"}], "side": [{"no": 32, "type": "S.UPPER"}]},
        {"bay": 9, "seats": [{"no": 33, "type": "LOWER"}, {"no": 34, "type": "MIDDLE"}, {"no": 35, "type": "UPPER"}], "side": [{"no": 39, "type": "S.LOWER"}]},
        {"bay": 10, "seats": [{"no": 36, "type": "LOWER"}, {"no": 37, "type": "MIDDLE"}, {"no": 38, "type": "UPPER"}], "side": [{"no": 40, "type": "S.UPPER"}]},
        {"bay": 11, "seats": [{"no": 41, "type": "LOWER"}, {"no": 42, "type": "MIDDLE"}, {"no": 43, "type": "UPPER"}], "side": [{"no": 47, "type": "S.LOWER"}]},
        {"bay": 12, "seats": [{"no": 44, "type": "LOWER"}, {"no": 45, "type": "MIDDLE"}, {"no": 46, "type": "UPPER"}], "side": [{"no": 48, "type": "S.UPPER"}]},
        {"bay": 13, "seats": [{"no": 49, "type": "LOWER"}, {"no": 50, "type": "MIDDLE"}, {"no": 51, "type": "UPPER"}], "side": [{"no": 55, "type": "S.LOWER"}]},
        {"bay": 14, "seats": [{"no": 52, "type": "LOWER"}, {"no": 53, "type": "MIDDLE"}, {"no": 54, "type": "UPPER"}], "side": [{"no": 56, "type": "S.UPPER"}]},
        {"bay": 15, "seats": [{"no": 57, "type": "LOWER"}, {"no": 58, "type": "MIDDLE"}, {"no": 59, "type": "UPPER"}], "side": [{"no": 63, "type": "S.LOWER"}]},
        {"bay": 16, "seats": [{"no": 60, "type": "LOWER"}, {"no": 61, "type": "MIDDLE"}, {"no": 62, "type": "UPPER"}], "side": [{"no": 64, "type": "S.UPPER"}]}
      ]
    },
    "2A": {
      "name": "AC 2-Tier", 
      "totalSeats": 46,
      "available": true,
      "layout": [
        {"bay": 1, "seats": [{"no": 1, "type": "LOWER"}, {"no": 2, "type": "UPPER"}], "side": [{"no": 5, "type": "S.LOWER"}]},
        {"bay": 2, "seats": [{"no": 3, "type": "LOWER"}, {"no": 4, "type": "UPPER"}], "side": [{"no": 6, "type": "S.UPPER"}]},
        {"bay": 3, "seats": [{"no": 7, "type": "LOWER"}, {"no": 8, "type": "UPPER"}], "side": [{"no": 11, "type": "S.LOWER"}]},
        {"bay": 4, "seats": [{"no": 9, "type": "LOWER"}, {"no": 10, "type": "UPPER"}], "side": [{"no": 12, "type": "S.UPPER"}]},
        {"bay": 5, "seats": [{"no": 13, "type": "LOWER"}, {"no": 14, "type": "UPPER"}], "side": [{"no": 17, "type": "S.LOWER"}]},
        {"bay": 6, "seats": [{"no": 15, "type": "LOWER"}, {"no": 16, "type": "UPPER"}], "side": [{"no": 18, "type": "S.UPPER"}]},
        {"bay": 7, "seats": [{"no": 19, "type": "LOWER"}, {"no": 20, "type": "UPPER"}], "side": [{"no": 23, "type": "S.LOWER"}]},
        {"bay": 8, "seats": [{"no": 21, "type": "LOWER"}, {"no": 22, "type": "UPPER"}], "side": [{"no": 24, "type": "S.UPPER"}]},
        {"bay": 9, "seats": [{"no": 25, "type": "LOWER"}, {"no": 26, "type": "UPPER"}], "side": [{"no": 29, "type": "S.LOWER"}]},
        {"bay": 10, "seats": [{"no": 27, "type": "LOWER"}, {"no": 28, "type": "UPPER"}], "side": [{"no": 30, "type": "S.UPPER"}]},
        {"bay": 11, "seats": [{"no": 31, "type": "LOWER"}, {"no": 32, "type": "UPPER"}], "side": [{"no": 35, "type": "S.LOWER"}]},
        {"bay": 12, "seats": [{"no": 33, "type": "LOWER"}, {"no": 34, "type": "UPPER"}], "side": [{"no": 36, "type": "S.UPPER"}]},
        {"bay": 13, "seats": [{"no": 37, "type": "LOWER"}, {"no": 38, "type": "UPPER"}], "side": [{"no": 41, "type": "S.LOWER"}]},
        {"bay": 14, "seats": [{"no": 39, "type": "LOWER"}, {"no": 40, "type": "UPPER"}], "side": [{"no": 42, "type": "S.UPPER"}]},
        {"bay": 15, "seats": [{"no": 43, "type": "LOWER"}, {"no": 44, "type": "UPPER"}], "side": [{"no": 45, "type": "S.LOWER"}]},
        {"bay": 16, "seats": [], "side": [{"no": 46, "type": "S.UPPER"}]}
      ]
    },
    "1A": {
      "name": "AC 1st Class",
      "totalSeats": 22,
      "available": true,
      "layout": [
        {"bay": 1, "seats": [{"no": 1, "type": "LOWER"}, {"no": 2, "type": "UPPER"}], "side": []},
        {"bay": 2, "seats": [{"no": 3, "type": "LOWER"}, {"no": 4, "type": "UPPER"}], "side": []},
        {"bay": 3, "seats": [{"no": 5, "type": "LOWER"}, {"no": 6, "type": "UPPER"}], "side": []},
        {"bay": 4, "seats": [{"no": 7, "type": "LOWER"}, {"no": 8, "type": "UPPER"}], "side": []},
        {"bay": 5, "seats": [{"no": 9, "type": "LOWER"}, {"no": 10, "type": "UPPER"}], "side": []},
        {"bay": 6, "seats": [{"no": 11, "type": "LOWER"}, {"no": 12, "type": "UPPER"}], "side": []},
        {"bay": 7, "seats": [{"no": 13, "type": "LOWER"}, {"no": 14, "type": "UPPER"}], "side": []},
        {"bay": 8, "seats": [{"no": 15, "type": "LOWER"}, {"no": 16, "type": "UPPER"}], "side": []},
        {"bay": 9, "seats": [{"no": 17, "type": "LOWER"}, {"no": 18, "type": "UPPER"}], "side": []},
        {"bay": 10, "seats": [{"no": 19, "type": "LOWER"}, {"no": 20, "type": "UPPER"}], "side": []},
        {"bay": 11, "seats": [{"no": 21, "type": "LOWER"}, {"no": 22, "type": "UPPER"}], "side": []}
      ]
    },
    "SL": {
      "name": "Sleeper",
      "totalSeats": 72,
      "available": true,
      "layout": [
        {"bay": 1, "seats": [{"no": 1, "type": "LOWER"}, {"no": 2, "type": "MIDDLE"}, {"no": 3, "type": "UPPER"}], "side": [{"no": 7, "type": "S.LOWER"}]},
        {"bay": 2, "seats": [{"no": 4, "type": "LOWER"}, {"no": 5, "type": "MIDDLE"}, {"no": 6, "type": "UPPER"}], "side": [{"no": 8, "type": "S.UPPER"}]},
        {"bay": 3, "seats": [{"no": 9, "type": "LOWER"}, {"no": 10, "type": "MIDDLE"}, {"no": 11, "type": "UPPER"}], "side": [{"no": 15, "type": "S.LOWER"}]},
        {"bay": 4, "seats": [{"no": 12, "type": "LOWER"}, {"no": 13, "type": "MIDDLE"}, {"no": 14, "type": "UPPER"}], "side": [{"no": 16, "type": "S.UPPER"}]},
        {"bay": 5, "seats": [{"no": 17, "type": "LOWER"}, {"no": 18, "type": "MIDDLE"}, {"no": 19, "type": "UPPER"}], "side": [{"no": 23, "type": "S.LOWER"}]},
        {"bay": 6, "seats": [{"no": 20, "type": "LOWER"}, {"no": 21, "type": "MIDDLE"}, {"no": 22, "type": "UPPER"}], "side": [{"no": 24, "type": "S.UPPER"}]},
        {"bay": 7, "seats": [{"no": 25, "type": "LOWER"}, {"no": 26, "type": "MIDDLE"}, {"no": 27, "type": "UPPER"}], "side": [{"no": 31, "type": "S.LOWER"}]},
        {"bay": 8, "seats": [{"no": 28, "type": "LOWER"}, {"no": 29, "type": "MIDDLE"}, {"no": 30, "type": "UPPER"}], "side": [{"no": 32, "type": "S.UPPER"}]},
        {"bay": 9, "seats": [{"no": 33, "type": "LOWER"}, {"no": 34, "type": "MIDDLE"}, {"no": 35, "type": "UPPER"}], "side": [{"no": 39, "type": "S.LOWER"}]},
        {"bay": 10, "seats": [{"no": 36, "type": "LOWER"}, {"no": 37, "type": "MIDDLE"}, {"no": 38, "type": "UPPER"}], "side": [{"no": 40, "type": "S.UPPER"}]},
        {"bay": 11, "seats": [{"no": 41, "type": "LOWER"}, {"no": 42, "type": "MIDDLE"}, {"no": 43, "type": "UPPER"}], "side": [{"no": 47, "type": "S.LOWER"}]},
        {"bay": 12, "seats": [{"no": 44, "type": "LOWER"}, {"no": 45, "type": "MIDDLE"}, {"no": 46, "type": "UPPER"}], "side": [{"no": 48, "type": "S.UPPER"}]},
        {"bay": 13, "seats": [{"no": 49, "type": "LOWER"}, {"no": 50, "type": "MIDDLE"}, {"no": 51, "type": "UPPER"}], "side": [{"no": 55, "type": "S.LOWER"}]},
        {"bay": 14, "seats": [{"no": 52, "type": "LOWER"}, {"no": 53, "type": "MIDDLE"}, {"no": 54, "type": "UPPER"}], "side": [{"no": 56, "type": "S.UPPER"}]},
        {"bay": 15, "seats": [{"no": 57, "type": "LOWER"}, {"no": 58, "type": "MIDDLE"}, {"no": 59, "type": "UPPER"}], "side": [{"no": 63, "type": "S.LOWER"}]},
        {"bay": 16, "seats": [{"no": 60, "type": "LOWER"}, {"no": 61, "type": "MIDDLE"}, {"no": 62, "type": "UPPER"}], "side": [{"no": 64, "type": "S.UPPER"}]},
        {"bay": 17, "seats": [{"no": 65, "type": "LOWER"}, {"no": 66, "type": "MIDDLE"}, {"no": 67, "type": "UPPER"}], "side": [{"no": 71, "type": "S.LOWER"}]},
        {"bay": 18, "seats": [{"no": 68, "type": "LOWER"}, {"no": 69, "type": "MIDDLE"}, {"no": 70, "type": "UPPER"}], "side": [{"no": 72, "type": "S.UPPER"}]},
      ]
    },
    "EC": {
      "name": "Executive Chair class",
      "totalSeats": 46,
      "available": true,
      "layout": [
        {"bay": 1, "seats": [{"no": 1, "type": "WINDOW"}, {"no": 2, "type": "AISLE"}], "side": [{"no": 3, "type": "S.AISLE"}, {"no": 4, "type": "S.WINDOW"}]},
        {"bay": 2, "seats": [{"no": 5, "type": "WINDOW"}, {"no": 6, "type": "AISLE"}], "side": [{"no": 7, "type": "S.AISLE"}, {"no": 8, "type": "S.Window"}]},
        {"bay": 3, "seats": [{"no": 9, "type": "WINDOW"}, {"no": 10, "type": "AISLE"}], "side": [{"no": 11, "type": "S.AISLE"}, {"no": 12, "type": "S.WINDOW"}]},
        {"bay": 4, "seats": [{"no": 13, "type": "WINDOW"}, {"no": 14, "type": "AISLE"}], "side": [{"no": 15, "type": "S.AISLE"}, {"no": 16, "type": "S.Window"}]},
        {"bay": 5, "seats": [{"no": 17, "type": "WINDOW"}, {"no": 18, "type": "AISLE"}], "side": [{"no": 19, "type": "S.AISLE"}, {"no": 20, "type": "S.WINDOW"}]},
        {"bay": 6, "seats": [{"no": 21, "type": "WINDOW"}, {"no": 22, "type": "AISLE"}], "side": [{"no": 23, "type": "S.AISLE"}, {"no": 24, "type": "S.Window"}]},
        {"bay": 7, "seats": [{"no": 25, "type": "WINDOW"}, {"no": 26, "type": "AISLE"}], "side": [{"no": 27, "type": "S.AISLE"}, {"no": 28, "type": "S.WINDOW"}]},
        {"bay": 8, "seats": [{"no": 29, "type": "WINDOW"}, {"no": 30, "type": "AISLE"}], "side": [{"no": 31, "type": "S.AISLE"}, {"no": 32, "type": "S.Window"}]},
        {"bay": 9, "seats": [{"no": 33, "type": "WINDOW"}, {"no": 34, "type": "AISLE"}], "side": [{"no": 35, "type": "S.AISLE"}, {"no": 36, "type": "S.WINDOW"}]},
        {"bay": 10, "seats": [{"no": 37, "type": "WINDOW"}, {"no": 38, "type": "AISLE"}], "side": [{"no": 39, "type": "S.AISLE"}, {"no": 40, "type": "S.Window"}]},
        {"bay": 11, "seats": [{"no": 41, "type": "WINDOW"}, {"no": 42, "type": "AISLE"}], "side": [{"no": 43, "type": "S.AISLE"}, {"no": 44, "type": "S.WINDOW"}]},
        {"bay": 12, "seats": [{"no": 45, "type": "WINDOW"}, {"no": 46, "type": "AISLE"}], "side": []}
      ]
    },
    "CC": {
      "name": "AC Chair Car",
      "totalSeats": 78,
      "available": true,
      "layout": [
        {"bay": 1, "seats": [{"no": 1, "type": "WINDOW"}, {"no": 2, "type": "AISLE"}], "side": [{"no": 3, "type": "S.AISLE"}, {"no": 4, "type": "S.WINDOW"}]},
        {"bay": 2, "seats": [{"no": 5, "type": "WINDOW"}, {"no": 6, "type": "AISLE"}, {"no": 7, "type": "AISLE"}], "side": [{"no": 8, "type": "S.AISLE"}, {"no": 9, "type": "S.Window"}]},
        {"bay": 3, "seats": [{"no": 10, "type": "WINDOW"}, {"no": 11, "type": "AISLE"}, {"no": 12, "type": "AISLE"}], "side": [{"no": 13, "type": "S.AISLE"}, {"no": 14, "type": "S.WINDOW"}]},
        {"bay": 4, "seats": [{"no": 15, "type": "WINDOW"}, {"no": 16, "type": "AISLE"}, {"no": 17, "type": "AISLE"}], "side": [{"no": 18, "type": "S.AISLE"}, {"no": 19, "type": "S.Window"}]},
        {"bay": 5, "seats": [{"no": 20, "type": "WINDOW"}, {"no": 21, "type": "AISLE"}, {"no": 22, "type": "AISLE"}], "side": [{"no": 23, "type": "S.AISLE"}, {"no": 24, "type": "S.WINDOW"}]},
        {"bay": 6, "seats": [{"no": 25, "type": "WINDOW"}, {"no": 26, "type": "AISLE"}, {"no": 27, "type": "AISLE"}], "side": [{"no": 28, "type": "S.AISLE"}, {"no": 29, "type": "S.Window"}]},
        {"bay": 7, "seats": [{"no": 30, "type": "WINDOW"}, {"no": 31, "type": "AISLE"}, {"no": 32, "type": "AISLE"}], "side": [{"no": 33, "type": "S.AISLE"}, {"no": 34, "type": "S.WINDOW"}]},
        {"bay": 8, "seats": [{"no": 35, "type": "WINDOW"}, {"no": 36, "type": "AISLE"}, {"no": 37, "type": "AISLE"}], "side": [{"no": 38, "type": "S.AISLE"}, {"no": 39, "type": "S.Window"}]},
        {"bay": 9, "seats": [{"no": 40, "type": "WINDOW"}, {"no": 41, "type": "AISLE"}, {"no": 42, "type": "AISLE"}], "side": [{"no": 43, "type": "S.AISLE"}, {"no": 44, "type": "S.WINDOW"}]},
        {"bay": 10, "seats": [{"no": 45, "type": "WINDOW"}, {"no": 46, "type": "AISLE"}, {"no": 47, "type": "AISLE"}], "side": [{"no": 48, "type": "S.AISLE"}, {"no": 49, "type": "S.Window"}]},
        {"bay": 11, "seats": [{"no": 50, "type": "WINDOW"}, {"no": 51, "type": "AISLE"}, {"no": 52, "type": "AISLE"}], "side": [{"no": 53, "type": "S.AISLE"}, {"no": 54, "type": "S.WINDOW"}]},
        {"bay": 12, "seats": [{"no": 55, "type": "WINDOW"}, {"no": 56, "type": "AISLE"},{"no": 57, "type": "AISLE"}], "side": [{"no": 58, "type": "S.AISLE"}, {"no": 59, "type": "S.WINDOW"}]},
        {"bay": 13, "seats": [{"no": 60, "type": "WINDOW"}, {"no": 61, "type": "AISLE"}, {"no": 62, "type": "AISLE"}], "side": [{"no": 63, "type": "S.AISLE"}, {"no": 64, "type": "S.WINDOW"}]},
        {"bay": 14, "seats": [{"no": 65, "type": "WINDOW"}, {"no": 66, "type": "AISLE"},{"no": 67, "type": "AISLE"}], "side": [{"no": 68, "type": "S.AISLE"}, {"no": 69, "type": "S.WINDOW"}]},
        {"bay": 15, "seats": [{"no": 70, "type": "WINDOW"}, {"no": 71, "type": "AISLE"}, {"no": 72, "type": "AISLE"}], "side": [{"no": 73, "type": "S.AISLE"}, {"no": 74, "type": "S.WINDOW"}]},
        {"bay": 16, "seats": [{"no": 75, "type": "WINDOW"}, {"no": 76, "type": "AISLE"}], "side": [{"no": 77, "type": "S.AISLE"}, {"no": 78, "type": "S.WINDOW"}]}
      ]
    }
  },
  
  paymentMethods: [
    {"type": "card", "name": "Credit/Debit Card", "icon": "fas fa-credit-card"},
    {"type": "upi", "name": "UPI", "icon": "fas fa-mobile-alt"},
    {"type": "netbanking", "name": "Net Banking", "icon": "fas fa-university"},
    {"type": "wallet", "name": "Digital Wallet", "icon": "fas fa-wallet"}
  ],

  // Feature Cards Data
  featureCards: [
    {
      "id": "book-ticket",
      "title": "Smart Booking", 
      "description": "AI-powered train booking with voice commands and route-based search",
      "icon": "fas fa-ticket-alt",
      "iconColor": "orange",
      "borderColor": "orange",
      "buttonText": "Book Now",
      "targetSection": "booking"
    },
    {
      "id": "track-train",
      "title": "Live Tracking",
      "description": "Real-time train location with detailed running status and voice updates", 
      "icon": "fas fa-map-marker-alt",
      "iconColor": "green",
      "borderColor": "green", 
      "buttonText": "Track Now",
      "targetSection": "tracking"
    },
    {
      "id": "voice-assistant", 
      "title": "AI Voice Assistant",
      "description": "Natural language voice commands for hands-free railway experience",
      "icon": "fas fa-microphone",
      "iconColor": "green",
      "borderColor": "green",
      "buttonText": "Try Voice AI", 
      "targetSection": "voice"
    },
    {
      "id": "smart-profile",
      "title": "Smart Profile", 
      "description": "Intelligent booking management with saved passengers and preferences",
      "icon": "fas fa-user-cog",
      "iconColor": "orange", 
      "borderColor": "orange",
      "buttonText": "Manage Profile",
      "targetSection": "profile"
    }
  ],

  // Enhanced Delay Notifications
  delayNotifications: [
    {
      "message": "Mumbai Rajdhani Express (12951) is running 45 minutes late - Currently at Ratlam Junction",
      "type": "delayed",
      "backgroundColor": "#FF6B35",
      "icon": "fas fa-exclamation-triangle"
    },
    {
      "message": "Shatabdi Express (12009) is running on time - Currently at Vadodara Junction", 
      "type": "ontime",
      "backgroundColor": "#4CAF50", 
      "icon": "fas fa-check-circle"
    },
    {
      "message": "Kerala Express (12625) has a 20-minute delay - Currently at Pune Junction",
      "type": "delayed",
      "backgroundColor": "#FF6B35",
      "icon": "fas fa-exclamation-triangle"  
    },
    {
      "message": "Local trains are running on time - Next departure in 3 minutes",
      "type": "ontime",
      "backgroundColor": "#4CAF50",
      "icon": "fas fa-check-circle"
    }
  ]
};

// Application state
let currentUser = null;
let isLoggedIn = false;
let voiceRecognition = null;
let isListening = false;

let currentBookingData = {
  from: null,
  to: null,
  journeyDate: null,
  selectedTrain: null,
  selectedCoach: null,
  selectedSeats: [],
  totalFare: 0,
  searchResults: []
};

// Enhanced UTS booking data with adult/child passengers and date
let utsBookingData = {
  from: null,
  to: null,
  journeyDate: null,
  class: null,
  quota: null,
  adultCount: 1,
  childCount: 0,
  totalFare: 0,
  paymentMethod: null,
  currentStep: 1
};

let bookingHistory = [
  {
    "id": "TKT001",
    "type": "reserved",
    "pnr": "1234567890",
    "trainNumber": "12951",
    "trainName": "Mumbai Rajdhani Express", 
    "date": "2025-10-15",
    "from": {"code": "BCT", "name": "Mumbai Central"},
    "to": {"code": "NDLS", "name": "New Delhi"},
    "passengers": [
      {"name": "Rahul Kumar", "age": 32, "gender": "Male", "seat": "A1-15", "berth": "Lower"}
    ],
    "totalFare": 1850,
    "status": "Confirmed",
    "bookingDate": "2025-09-27",
    "qrCode": "TKT001-QR-CODE"
  },
  {
    "id": "TKT002", 
    "type": "general",
    "journeyDate": "2025-10-02",
    "from": {"code": "CSMT", "name": "Mumbai CST"},
    "to": {"code": "KYN", "name": "Kalyan Junction"},
    "class": "Second Class",
    "quota": "General", 
    "adultCount": 1,
    "childCount": 1,
    "totalFare": 67,
    "bookingDate": "2025-09-27",
    "qrCode": "TKT002-QR-CODE"
  }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
  setupSectionNavigation();
  initializeDateInputs();
  initializeDelayNotifications();
  initializeFeatureCards();
  initializeVoiceAssistant();
  initializeAuth();
  initializeProfile();
  initializeUTSEnhancements();
  setupPassengerFormNavigation();
});

// function initializeApp() {
//   // Set minimum date for journey date (today)
//   const today = new Date().toISOString().split('T')[0];
//   const journeyDateInput = document.getElementById('journeyDate');
  
//   if (journeyDateInput) {
//     journeyDateInput.min = today;
//     // Set default to tomorrow
//     const tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     const tomorrowString = tomorrow.toISOString().split('T')[0];
//     journeyDateInput.value = tomorrowString;
//     currentBookingData.journeyDate = tomorrowString;
//   }
  
//   // Show home section by default
//   showSection('home');
  
//   // Initialize booking history
//   displayBookingHistory();
  
//   console.log('AI-Enhanced Railway System with Enhanced UTS, Date Selection, Dynamic Fare Calculation, and QR Code Generation Loaded Successfully!');
// }

// Initialize app with proper hiding
function initializeApp() {
    // Set minimum date for journey date (today)
    const today = new Date().toISOString().split('T')[0];
    const journeyDateInput = document.getElementById('journeyDate');

    if (journeyDateInput) {
        journeyDateInput.min = today;
        // Set default to tomorrow
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowString = tomorrow.toISOString().split('T')[0];
        journeyDateInput.value = tomorrowString;
        currentBookingData.journeyDate = tomorrowString;
    }

    // CRITICAL: Force hide passenger section on app initialization
    const passengerSection = document.getElementById('passenger-section');
    if (passengerSection) {
        passengerSection.classList.add('hidden');
        passengerSection.style.display = 'none !important';
        passengerSection.style.visibility = 'hidden !important';
        passengerSection.style.opacity = '0 !important';
        console.log('✅ Passenger section FORCED hidden on app init');
    }

    // Show home section by default
    showSection('home');

    // Initialize booking history
    displayBookingHistory();

    console.log('🚀 AI-Enhanced Railway System - Passenger Section Fixed - Loaded Successfully!');
}

// Enhanced UTS initialization
function initializeUTSEnhancements() {
  // Initialize date input for UTS
  const utsJourneyDateInput = document.getElementById('utsJourneyDate');
  if (utsJourneyDateInput) {
    const today = new Date().toISOString().split('T')[0];
    utsJourneyDateInput.min = today; // No past dates allowed
    
    // Set default to today
    utsJourneyDateInput.value = today;
    utsBookingData.journeyDate = today;
  }
  
  // Initialize adult/child passenger counts
  updatePassengerCounts();
  calculateUTSFare();
  
  // Setup quota change handler to show/hide adult/child panel
  const quotaSelect = document.getElementById('utsQuota');
  if (quotaSelect) {
    quotaSelect.addEventListener('change', handleQuotaChange);
  }
}

// Handle quota change to show/hide adult/child selection for General quota only
function handleQuotaChange() {
  const quota = document.getElementById('utsQuota')?.value;
  const passengerTypePanel = document.getElementById('passengerTypePanel');
  const standardPassengerInfo = document.getElementById('standardPassengerInfo');
  
  if (quota === 'GN') {
    // Show adult/child panel for General quota
    if (passengerTypePanel) passengerTypePanel.style.display = 'block';
    if (standardPassengerInfo) standardPassengerInfo.style.display = 'none';
  } else {
    // Hide adult/child panel for other quotas
    if (passengerTypePanel) passengerTypePanel.style.display = 'none';
    if (standardPassengerInfo) standardPassengerInfo.style.display = 'block';
    
    // Reset counts to single passenger for other quotas
    utsBookingData.adultCount = 1;
    utsBookingData.childCount = 0;
    updatePassengerCounts();
  }
  
  calculateUTSFare();
}

// Enhanced Adult/Child Passenger Count Management
function changePassengerCount(type, change) {
  if (type === 'adult') {
    const newCount = Math.max(1, Math.min(6, utsBookingData.adultCount + change));
    utsBookingData.adultCount = newCount;
  } else if (type === 'child') {
    const newCount = Math.max(0, Math.min(6, utsBookingData.childCount + change));
    utsBookingData.childCount = newCount;
  }
  
  updatePassengerCounts();
  calculateUTSFare();
}

function updatePassengerCounts() {
  const adultCountElement = document.getElementById('adultCount');
  const childCountElement = document.getElementById('childCount');
  
  if (adultCountElement) {
    adultCountElement.textContent = utsBookingData.adultCount;
  }
  
  if (childCountElement) {
    childCountElement.textContent = utsBookingData.childCount;
  }
  
  // Update ticket counts in fare breakdown
  const adultTicketsElement = document.getElementById('adultTickets');
  const childTicketsElement = document.getElementById('childTickets');
  
  if (adultTicketsElement) {
    adultTicketsElement.textContent = utsBookingData.adultCount;
  }
  
  if (childTicketsElement) {
    childTicketsElement.textContent = utsBookingData.childCount;
  }
}

// Enhanced UTS Fare Calculation with ₹10 per 10km base and 50% child discount
function calculateUTSFare() {
  const ticketClass = document.getElementById('ticketClass')?.value;
  const quota = document.getElementById('utsQuota')?.value;
  
  if (!ticketClass) {
    // Reset display if no class selected
    updateFareDisplay(0, 0, 0, 0);
    return;
  }
  
  // Base fare calculation: ₹10 per 10km (simplified to ₹10 base)
  const baseFarePerAdult = applicationData.fareStructure.firstClass.baseFare; // ₹10
  const childDiscountPercent = applicationData.fareStructure.childDiscountPercentage; // 50%
  
  // Calculate child fare (50% of adult fare)
  const baseFarePerChild = Math.floor(baseFarePerAdult * (childDiscountPercent / 100));
  
  // Apply quota discounts
  const quotaOption = applicationData.quotaOptions.find(q => q.code === quota);
  let adultDiscount = 0;
  let childDiscount = 0;
  
  if (quotaOption && quotaOption.discount) {
    adultDiscount = Math.floor((baseFarePerAdult * quotaOption.discount) / 100);
    childDiscount = Math.floor((baseFarePerChild * quotaOption.discount) / 100);
  }
  
  const finalAdultFare = baseFarePerAdult - adultDiscount;
  const finalChildFare = baseFarePerChild - childDiscount;
  
  // Calculate total fares
  const adultTotalFare = finalAdultFare * utsBookingData.adultCount;
  const childTotalFare = finalChildFare * utsBookingData.childCount;
  const serviceFee = applicationData.fareStructure.taxes.serviceFee;
  const totalAmount = adultTotalFare + childTotalFare + serviceFee;
  
  utsBookingData.totalFare = totalAmount;
  
  // Update display
  updateFareDisplay(finalAdultFare, finalChildFare, adultTotalFare, childTotalFare, serviceFee, totalAmount);
}

function updateFareDisplay(adultFare, childFare, adultTotal, childTotal, serviceFee = 10, total) {
  // Update individual fare displays
  const adultFareElement = document.getElementById('adultFare');
  const childFareElement = document.getElementById('childFare');
  
  if (adultFareElement) adultFareElement.textContent = `₹${adultFare}`;
  if (childFareElement) childFareElement.textContent = `₹${childFare}`;
  
  // Update total fare displays
  const adultTotalFareElement = document.getElementById('adultTotalFare');
  const childTotalFareElement = document.getElementById('childTotalFare');
  const utsServiceChargeElement = document.getElementById('utsServiceCharge');
  const utsTotalElement = document.getElementById('utsTotal');
  const finalAmountElement = document.getElementById('finalAmount');
  
  if (adultTotalFareElement) adultTotalFareElement.textContent = `₹${adultTotal}`;
  if (childTotalFareElement) childTotalFareElement.textContent = `₹${childTotal}`;
  if (utsServiceChargeElement) utsServiceChargeElement.textContent = `₹${serviceFee}`;
  if (utsTotalElement) utsTotalElement.textContent = `₹${total}`;
  if (finalAmountElement) finalAmountElement.textContent = `₹${total}`;
}

// Enhanced QR Code Generation using QRCode.js
function generateQRCodeForTicket(ticketData, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  // Clear existing QR code
  container.innerHTML = '';
  
  let qrData;
  if (ticketData.type === 'reserved') {
    qrData = {
      type: 'RESERVED_TICKET',
      pnr: ticketData.pnr,
      trainNumber: ticketData.trainNumber,
      trainName: ticketData.trainName,
      date: ticketData.date,
      from: ticketData.from.code,
      to: ticketData.to.code,
      coach: ticketData.passengers[0]?.seat?.split('-')[0] || 'A1',
      seatNo: ticketData.passengers[0]?.seat || 'A1-15',
      passengerName: ticketData.passengers[0]?.name || 'Passenger',
      bookingId: ticketData.id,
      timestamp: new Date().toISOString()
    };
  } else {
    qrData = {
      type: 'UTS_TICKET',
      ticketId: ticketData.id,
      date: ticketData.journeyDate,
      from: ticketData.from.code,
      to: ticketData.to.code,
      class: ticketData.class,
      quota: ticketData.quota,
      nAdults: ticketData.adultCount || 1,
      nChildren: ticketData.childCount || 0,
      amount: ticketData.totalFare,
      bookingId: ticketData.id,
      timestamp: new Date().toISOString()
    };
  }
  
  // Generate QR code using QRCode.js
  if (window.QRCode) {
    try {
      const qrCodeCanvas = document.createElement('canvas');
      container.appendChild(qrCodeCanvas);
      
      QRCode.toCanvas(qrCodeCanvas, JSON.stringify(qrData), {
        width: 150,
        height: 150,
        margin: 1,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      }, function(error) {
        if (error) {
          console.error('QR Code generation failed:', error);
          container.innerHTML = `
            <div class="qr-placeholder">
              <i class="fas fa-qrcode"></i>
            </div>
          `;
        }
      });
    } catch (error) {
      console.error('QR Code generation error:', error);
      container.innerHTML = `
        <div class="qr-placeholder">
          <i class="fas fa-qrcode"></i>
        </div>
      `;
    }
  } else {
    // Fallback if QRCode.js is not loaded
    container.innerHTML = `
      <div class="qr-placeholder">
        <i class="fas fa-qrcode"></i>
      </div>
    `;
  }
}

// Voice Assistant Functions
function initializeVoiceAssistant() {
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    voiceRecognition = new SpeechRecognition();
    
    voiceRecognition.continuous = false;
    voiceRecognition.interimResults = false;
    voiceRecognition.lang = 'en-US';
    
    voiceRecognition.onstart = function() {
      isListening = true;
      updateVoiceStatus('Listening... Speak now');
      updateVoiceMicButton('listening');
      addChatMessage('system', 'Listening for your command...');
    };
    
    voiceRecognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript.toLowerCase().trim();
      addChatMessage('user', `You said: "${transcript}"`);
      processVoiceCommand(transcript);
    };
    
    voiceRecognition.onerror = function(event) {
      console.error('Voice recognition error:', event.error);
      addChatMessage('error', `Voice recognition error: ${event.error}`);
      stopListening();
    };
    
    voiceRecognition.onend = function() {
      stopListening();
    };
    
    showToast('Voice Assistant is ready! Click the microphone to start.', 'success');
  } else {
    console.warn('Speech recognition not supported');
    showToast('Voice recognition not supported in this browser', 'info');
  }
}

function openVoicePanel() {
  const panel = document.getElementById('voicePanel');
  if (panel) {
    panel.classList.remove('hidden');
    panel.classList.add('active');
  }
}

function closeVoicePanel() {
  const panel = document.getElementById('voicePanel');
  if (panel) {
    panel.classList.remove('active');
    setTimeout(() => {
      panel.classList.add('hidden');
    }, 300);
    
    // Stop listening if active
    if (isListening) {
      stopListening();
    }
  }
}

function toggleVoiceListening() {
  if (!voiceRecognition) {
    showToast('Voice recognition not available', 'error');
    return;
  }
  
  if (isListening) {
    stopListening();
  } else {
    startListening();
  }
}

function startListening() {
  if (!voiceRecognition) return;
  
  try {
    voiceRecognition.start();
  } catch (error) {
    console.error('Error starting voice recognition:', error);
    showToast('Failed to start voice recognition', 'error');
  }
}

function stopListening() {
  if (voiceRecognition && isListening) {
    voiceRecognition.stop();
  }
  
  isListening = false;
  updateVoiceStatus('Click the microphone to start');
  updateVoiceMicButton('ready');
}

function updateVoiceStatus(status) {
  const statusElement = document.getElementById('voiceStatus');
  if (statusElement) {
    const statusSpan = statusElement.querySelector('span');
    if (statusSpan) {
      statusSpan.textContent = status;
    }
    
    if (status.includes('Listening')) {
      statusElement.classList.add('listening');
    } else {
      statusElement.classList.remove('listening');
    }
  }
}

function addChatMessage(type, message) {
  const chatContainer = document.getElementById('voiceChat');
  if (!chatContainer) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${type}`;
  
  let icon = 'fas fa-robot';
  if (type === 'user') {
    icon = 'fas fa-user';
  } else if (type === 'error') {
    icon = 'fas fa-exclamation-triangle';
  }
  
  messageDiv.innerHTML = `
    <i class="${icon}"></i>
    <span>${message}</span>
  `;
  
  chatContainer.appendChild(messageDiv);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function updateVoiceMicButton(state) {
  const micBtn = document.getElementById('voiceMicBtn');
  if (!micBtn) return;
  
  micBtn.classList.remove('listening', 'processing');
  
  if (state === 'listening') {
    micBtn.classList.add('listening');
  } else if (state === 'processing') {
    micBtn.classList.add('processing');
  }
}

function processVoiceCommand(transcript) {
  let commandFound = false;
  
  // Check each voice command
  for (const command of applicationData.voiceCommands) {
    for (const phrase of command.phrases) {
      if (transcript.includes(phrase)) {
        executeVoiceAction(command.action, command.response);
        commandFound = true;
        break;
      }
    }
    if (commandFound) break;
  }
  
  if (!commandFound) {
    addChatMessage('system', "Sorry, I didn't understand that command. Try saying 'help' to see available commands.");
  }
}

function executeVoiceAction(action, response) {
  addChatMessage('system', response);
  
  setTimeout(() => {
    switch (action) {
      case 'openBooking':
        navigateToSection('booking');
        break;
      case 'showProfile':
        if (isLoggedIn) {
          navigateToSection('profile');
        } else {
          addChatMessage('system', 'Please login first to view your profile.');
          showAuthModal('loginModal');
        }
        break;
      case 'openTracking':
        navigateToSection('tracking');
        break;
      case 'openPNR':
        navigateToSection('pnr');
        break;
      case 'openUTS':
        navigateToSection('uts');
        break;
      case 'goHome':
        navigateToSection('home');
        break;
      case 'showLogin':
        showAuthModal('loginModal');
        break;
      case 'showRegister':
        showAuthModal('registerModal');
        break;
      case 'voice':
        // Voice panel is already open
        break;
      case 'showHelp':
        // Response already added above
        break;
      default:
        console.log('Unknown voice action:', action);
    }
  }, 1000);
}

function startVoiceSearch() {
  openVoicePanel();
  setTimeout(() => {
    if (voiceRecognition) {
      addChatMessage('system', 'Tell me where you want to travel. For example: "Book train from Mumbai to Delhi"');
      startListening();
    }
  }, 500);
}

// Authentication Functions
function initializeAuth() {
  // Check if user was previously logged in (simulate session)
  const savedUser = localStorage.getItem('railwayUser');
  if (savedUser) {
    try {
      currentUser = JSON.parse(savedUser);
      isLoggedIn = true;
      updateAuthUI();
    } catch (e) {
      localStorage.removeItem('railwayUser');
    }
  }
}

function showAuthModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    // Close voice panel if open
    closeVoicePanel();
    
    modal.classList.remove('hidden');
    
    // Focus on first input
    setTimeout(() => {
      const firstInput = modal.querySelector('input[type="text"], input[type="email"]');
      if (firstInput) {
        firstInput.focus();
      }
    }, 300);
  }
}

function closeAuthModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    
    // Clear form
    const form = modal.querySelector('form');
    if (form) {
      form.reset();
    }
  }
}

function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  const toggle = input.nextElementSibling;
  const icon = toggle.querySelector('i');
  
  if (input.type === 'password') {
    input.type = 'text';
    icon.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    input.type = 'password';
    icon.classList.replace('fa-eye-slash', 'fa-eye');
  }
}

function handleLogin(event) {
  event.preventDefault();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const rememberMe = document.getElementById('rememberMe').checked;
  
  // Simulate login validation
  if (email && password) {
    currentUser = {
      id: 1,
      name: 'Rahul Kumar',
      email: email,
      phone: '+91 9876543210',
      aadhaar: '****-****-1234'
    };
    
    isLoggedIn = true;
    
    if (rememberMe) {
      localStorage.setItem('railwayUser', JSON.stringify(currentUser));
    }
    
    updateAuthUI();
    closeAuthModal('loginModal');
    showToast(`Welcome back, ${currentUser.name}!`, 'success');
    
    // Add welcome message to voice chat if panel is open
    const voicePanel = document.getElementById('voicePanel');
    if (voicePanel && !voicePanel.classList.contains('hidden')) {
      addChatMessage('system', `Welcome back, ${currentUser.name}! I can now help you with your bookings and profile.`);
    }
  } else {
    showToast('Please enter valid credentials', 'error');
  }
}

function handleRegister(event) {
  event.preventDefault();
  
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('registerEmail').value;
  const mobile = document.getElementById('registerMobile').value;
  const aadhaar = document.getElementById('aadhaarNumber').value;
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const agreeTerms = document.getElementById('agreeTerms').checked;
  
  // Basic validation
  if (!agreeTerms) {
    showToast('Please agree to the Terms & Conditions', 'error');
    return;
  }
  
  if (password !== confirmPassword) {
    showToast('Passwords do not match', 'error');
    return;
  }
  
  if (aadhaar.length !== 12) {
    showToast('Please enter a valid 12-digit Aadhaar number', 'error');
    return;
  }
  
  if (mobile.length !== 10) {
    showToast('Please enter a valid 10-digit mobile number', 'error');
    return;
  }
  
  // Simulate successful registration
  currentUser = {
    id: Date.now(),
    name: `${firstName} ${lastName}`,
    email: email,
    phone: `+91 ${mobile}`,
    aadhaar: `****-****-${aadhaar.slice(-4)}`
  };
  
  isLoggedIn = true;
  localStorage.setItem('railwayUser', JSON.stringify(currentUser));
  
  updateAuthUI();
  closeAuthModal('registerModal');
  showToast(`Account created successfully! Welcome, ${currentUser.name}!`, 'success');
  
  // Navigate to profile to complete setup
  setTimeout(() => {
    navigateToSection('profile');
  }, 1500);
}

function logout() {
  currentUser = null;
  isLoggedIn = false;
  localStorage.removeItem('railwayUser');
  
  updateAuthUI();
  navigateToSection('home');
  showToast('Logged out successfully', 'info');
  
  // Add logout message to voice chat if panel is open
  const voicePanel = document.getElementById('voicePanel');
  if (voicePanel && !voicePanel.classList.contains('hidden')) {
    addChatMessage('system', 'You have been logged out. I can still help you with train search and tracking.');
  }
}

function updateAuthUI() {
  const guestSection = document.getElementById('navGuestSection');
  const userSection = document.getElementById('navUserSection');
  const userName = document.getElementById('navUserName');
  
  if (isLoggedIn && currentUser) {
    guestSection.classList.add('hidden');
    userSection.classList.remove('hidden');
    userName.textContent = currentUser.name.split(' ')[0]; // First name only
    
    // Update profile information
    updateProfileUI();
  } else {
    guestSection.classList.remove('hidden');
    userSection.classList.add('hidden');
  }
}

// Profile Management Functions
function initializeProfile() {
  setupProfileNavigation();
  setupProfileTabs();
  setupPassengerManagement();
}

function setupProfileNavigation() {
  document.querySelectorAll('.profile-nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const tab = this.getAttribute('data-tab');
      showProfileTab(tab);
      
      // Update active nav link
      document.querySelectorAll('.profile-nav-link').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

function showProfileTab(tabId) {
  // Hide all tabs
  document.querySelectorAll('.profile-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Show selected tab
  const targetTab = document.getElementById(tabId);
  if (targetTab) {
    targetTab.classList.add('active');
    
    // Load tab-specific content
    if (tabId === 'bookings') {
      displayProfileBookings();
    } else if (tabId === 'passengers') {
      displaySavedPassengers();
    }
  }
}

function setupProfileTabs() {
  // Dashboard is shown by default, load recent bookings
  displayRecentBookings();
}

function updateProfileUI() {
  if (!currentUser) return;
  
  const profileUserName = document.getElementById('profileUserName');
  const profileUserEmail = document.getElementById('profileUserEmail');
  
  if (profileUserName) {
    profileUserName.textContent = currentUser.name;
  }
  
  if (profileUserEmail) {
    profileUserEmail.textContent = currentUser.email;
  }
}

function displayRecentBookings() {
  const recentBookingsList = document.getElementById('recentBookingsList');
  if (!recentBookingsList) return;
  
  const recentBookings = applicationData.profileData.recentBookings.slice(0, 3);
  
  recentBookingsList.innerHTML = '';
  recentBookings.forEach(booking => {
    const bookingElement = document.createElement('div');
    bookingElement.className = 'recent-booking-item';
    bookingElement.innerHTML = `
      <div class="booking-info">
        <h4>${booking.trainName}</h4>
        <div class="booking-route">${booking.route}</div>
      </div>
      <div class="booking-status">
        <div class="status-badge ${booking.status}">${booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}</div>
        <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-top: var(--space-4);">₹${booking.amount}</div>
      </div>
    `;
    recentBookingsList.appendChild(bookingElement);
  });
}

function displayProfileBookings(filter = 'all') {
  const bookingsList = document.getElementById('profileBookingsList');
  if (!bookingsList) return;
  
  let filteredBookings = bookingHistory;
  
  if (filter === 'reserved') {
    filteredBookings = bookingHistory.filter(booking => booking.type === 'reserved');
  } else if (filter === 'general') {
    filteredBookings = bookingHistory.filter(booking => booking.type === 'general');
  } else if (filter === 'upcoming') {
    const today = new Date().toISOString().split('T')[0];
    filteredBookings = bookingHistory.filter(booking => {
      const bookingDate = booking.date || booking.journeyDate;
      return bookingDate >= today;
    });
  }
  
  bookingsList.innerHTML = '';
  
  if (filteredBookings.length === 0) {
    bookingsList.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--color-text-secondary);">
        <i class="fas fa-ticket-alt" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
        <p>No bookings found</p>
      </div>
    `;
    return;
  }
  
  filteredBookings.forEach(booking => {
    const bookingCard = createProfileBookingCard(booking);
    bookingsList.appendChild(bookingCard);
  });
}

function createProfileBookingCard(booking) {
  const card = document.createElement('div');
  card.className = 'booking-card';
  card.onclick = () => showTicketModal(booking);
  
  if (booking.type === 'reserved') {
    card.innerHTML = `
      <div class="booking-card-header">
        <h4>${booking.trainNumber} - ${booking.trainName}</h4>
        <span class="booking-type-badge reserved">Reserved</span>
      </div>
      <div class="booking-details">
        <div><strong>Route:</strong> ${booking.from.code} → ${booking.to.code}</div>
        <div><strong>Date:</strong> ${formatDate(booking.date)}</div>
        <div><strong>PNR:</strong> ${booking.pnr}</div>
        <div><strong>Status:</strong> ${booking.status}</div>
        <div><strong>Passengers:</strong> ${booking.passengers.length}</div>
        <div><strong>Fare:</strong> ₹${booking.totalFare}</div>
      </div>
    `;
  } else {
    card.innerHTML = `
      <div class="booking-card-header">
        <h4>UTS Ticket</h4>
        <span class="booking-type-badge general">General</span>
      </div>
      <div class="booking-details">
        <div><strong>Route:</strong> ${booking.from.code} → ${booking.to.code}</div>
        <div><strong>Date:</strong> ${formatDate(booking.journeyDate)}</div>
        <div><strong>Class:</strong> ${booking.class}</div>
        <div><strong>Quota:</strong> ${booking.quota}</div>
        <div><strong>Adults:</strong> ${booking.adultCount || 1}</div>
        <div><strong>Children:</strong> ${booking.childCount || 0}</div>
        <div><strong>Fare:</strong> ₹${booking.totalFare}</div>
      </div>
    `;
  }
  
  return card;
}

function displaySavedPassengers() {
  const passengersList = document.getElementById('savedPassengersList');
  if (!passengersList) return;
  
  const passengers = applicationData.profileData.savedPassengers;
  
  passengersList.innerHTML = '';
  passengers.forEach(passenger => {
    const passengerCard = document.createElement('div');
    passengerCard.className = 'passenger-card';
    passengerCard.innerHTML = `
      <div class="passenger-card-header">
        <div>
          <div class="passenger-name">${passenger.name}</div>
          <div class="passenger-details">${passenger.age} years, ${passenger.gender}</div>
          <div class="passenger-details">${passenger.phone}</div>
        </div>
        <div class="passenger-actions">
          <button class="icon-btn" onclick="editPassenger(${passenger.id})" title="Edit">
            <i class="fas fa-edit"></i>
          </button>
          <button class="icon-btn delete" onclick="deletePassenger(${passenger.id})" title="Delete">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    `;
    passengersList.appendChild(passengerCard);
  });
}

function setupPassengerManagement() {
  const addPassengerForm = document.getElementById('addPassengerForm');
  if (addPassengerForm) {
    addPassengerForm.addEventListener('submit', handleAddPassenger);
  }
}

function showAddPassengerModal() {
  const modal = document.getElementById('addPassengerModal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function closeAddPassengerModal() {
  const modal = document.getElementById('addPassengerModal');
  if (modal) {
    modal.classList.add('hidden');
    document.getElementById('addPassengerForm').reset();
  }
}

function handleAddPassenger(event) {
  event.preventDefault();
  
  const firstName = document.getElementById('passengerFirstName').value;
  const lastName = document.getElementById('passengerLastName').value;
  const age = parseInt(document.getElementById('passengerAge').value);
  const gender = document.getElementById('passengerGender').value;
  const phone = document.getElementById('passengerPhone').value;
  
  if (phone.length !== 10) {
    showToast('Please enter a valid 10-digit mobile number', 'error');
    return;
  }
  
  const newPassenger = {
    id: Date.now(),
    name: `${firstName} ${lastName}`,
    age: age,
    gender: gender,
    phone: `+91 ${phone}`
  };
  
  applicationData.profileData.savedPassengers.push(newPassenger);
  
  closeAddPassengerModal();
  displaySavedPassengers();
  showToast('Passenger added successfully!', 'success');
}

function editPassenger(passengerId) {
  // Implementation for editing passenger
  showToast('Edit passenger feature coming soon!', 'info');
}

function deletePassenger(passengerId) {
  if (confirm('Are you sure you want to delete this passenger?')) {
    const index = applicationData.profileData.savedPassengers.findIndex(p => p.id === passengerId);
    if (index !== -1) {
      applicationData.profileData.savedPassengers.splice(index, 1);
      displaySavedPassengers();
      showToast('Passenger deleted successfully', 'success');
    }
  }
}

function initializeDelayNotifications() {
  const notificationScroll = document.querySelector('.notification-scroll');
  if (!notificationScroll) return;

  // Create notifications from data
  const notifications = applicationData.delayNotifications;
  
  // Duplicate notifications to create seamless scroll
  const allNotifications = [...notifications, ...notifications];
  
  notificationScroll.innerHTML = '';
  allNotifications.forEach(notification => {
    const notificationElement = document.createElement('div');
    notificationElement.className = `notification-item ${notification.type}`;
    notificationElement.innerHTML = `
      <i class="${notification.icon}"></i>
      ${notification.message}
    `;
    notificationScroll.appendChild(notificationElement);
  });
}

function initializeFeatureCards() {
  const featureCardsGrid = document.getElementById('featureCardsGrid');
  if (!featureCardsGrid) return;

  const cards = applicationData.featureCards;
  
  featureCardsGrid.innerHTML = '';
  cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = `feature-card ${card.borderColor}-border`;
    cardElement.innerHTML = `
      <div class="feature-card-icon ${card.iconColor}">
        <i class="${card.icon}"></i>
      </div>
      <h3>${card.title}</h3>
      <p>${card.description}</p>
      <button class="feature-card-btn" onclick="handleFeatureCardClick('${card.targetSection}')">
        ${card.buttonText}
      </button>
    `;
    featureCardsGrid.appendChild(cardElement);
  });
}

function handleFeatureCardClick(targetSection) {
  if (targetSection === 'voice') {
    openVoicePanel();
  } else if (targetSection === 'profile') {
    if (isLoggedIn) {
      navigateToSection('profile');
    } else {
      showToast('Please login first to access your profile', 'info');
      showAuthModal('loginModal');
    }
  } else {
    navigateToSection(targetSection);
  }
}

// function navigateToSection(sectionId) {
//   console.log(`Navigating to section: ${sectionId}`);
//   showSection(sectionId);
  
//   // Update active nav link
//   document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
//   const navLink = document.querySelector(`[data-section="${sectionId}"]`);
//   if (navLink) {
//     navLink.classList.add('active');
//   }
  
//   // Close mobile menu if open
//   const navMenu = document.getElementById('navMenu');
//   if (navMenu && navMenu.classList.contains('active')) {
//     navMenu.classList.remove('active');
//     const navToggle = document.getElementById('navToggle');
//     const icon = navToggle?.querySelector('i');
//     if (icon) {
//       icon.classList.replace('fa-times', 'fa-bars');
//     }
//   }
  
//   // Scroll to top
//   window.scrollTo({ top: 0, behavior: 'smooth' });
  
//   showToast(`Navigated to ${getSectionDisplayName(sectionId)}`, 'info');
// }

// Enhanced navigation function
function navigateToSection(sectionId) {
    console.log(`🧭 Navigating to section: ${sectionId}`);

    // FORCE hide passenger section before any navigation
    const passengerSection = document.getElementById('passenger-section');
    if (passengerSection) {
        passengerSection.classList.add('hidden');
        passengerSection.classList.remove('active', 'visible');
        passengerSection.style.display = 'none !important';
        passengerSection.style.visibility = 'hidden !important';
        passengerSection.style.opacity = '0 !important';
        console.log('✅ Passenger section FORCED hidden during navigation');
    }

    // Show the target section
    showSection(sectionId);

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const navLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (navLink) {
        navLink.classList.add('active');
    }

    // Close mobile menu if open
    const navMenu = document.getElementById('navMenu');
    if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const navToggle = document.getElementById('navToggle');
        const icon = navToggle?.querySelector('i');
        if (icon) {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    showToast(`Navigated to ${getSectionDisplayName(sectionId)}`, 'info');
}

function getSectionDisplayName(sectionId) {
  const names = {
    'home': 'Home',
    'booking': 'Booking',
    'tracking': 'Live Tracking',
    'pnr': 'PNR Status',
    'uts': 'UTS Booking',
    'profile': 'Profile'
  };
  return names[sectionId] || sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
}

function setupEventListeners() {
  // Navigation toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      const icon = navToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
      } else {
        icon.classList.replace('fa-times', 'fa-bars');
      }
    });
  }

  // Station input autocomplete
  setupStationAutocomplete('fromStation', 'fromSuggestions', 'from');
  setupStationAutocomplete('toStation', 'toSuggestions', 'to');
  setupStationAutocomplete('utsFromStation', 'utsFromSuggestions', 'utsFrom');
  setupStationAutocomplete('utsToStation', 'utsToSuggestions', 'utsTo');

  // Station swap functionality
  const swapButton = document.getElementById('swapStations');
  if (swapButton) {
    swapButton.addEventListener('click', swapStations);
  }

  // Form submissions
  const quickBookingForm = document.getElementById('quickBookingForm');
  if (quickBookingForm) {
    quickBookingForm.addEventListener('submit', handleQuickBooking);
  }

  // Auth forms
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }

  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', handleRegister);
  }

  // UTS form
  const utsForm = document.getElementById('utsForm');
  if (utsForm) {
    utsForm.addEventListener('submit', handleUTSBooking);
  }

  // PNR form
  const pnrForm = document.getElementById('pnrForm');
  if (pnrForm) {
    pnrForm.addEventListener('submit', handlePNRCheck);
  }

  // Tracking form
  const trackingForm = document.getElementById('trackingForm');
  if (trackingForm) {
    trackingForm.addEventListener('submit', handleTrainTracking);
  }

  // UTS input changes
  setupUTSInputHandlers();
  
  // Payment method selection
  setupPaymentMethods();
  
  // Ticket filter buttons
  setupTicketFilters();
  
  // Input changes
  setupInputChangeHandlers();
  
  // Close suggestions when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.form-group')) {
      document.querySelectorAll('.station-suggestions').forEach(suggestions => {
        suggestions.classList.remove('active');
      });
    }
  });
}

function setupSectionNavigation() {
  console.log('Setting up section navigation...');
  
  // Navigation links - Enhanced with better event handling
  document.querySelectorAll('.nav-link[data-section]').forEach(link => {
    console.log('Setting up nav link for:', link.getAttribute('data-section'));
    
    // Remove existing listeners to avoid duplicates
    link.removeEventListener('click', handleNavLinkClick);
    link.addEventListener('click', handleNavLinkClick);
  });
  
  // Also setup login/register buttons if they exist
  const guestSection = document.getElementById('navGuestSection');
  if (guestSection) {
    const loginBtn = guestSection.querySelector('.btn--outline');
    const registerBtn = guestSection.querySelector('.btn--primary');
    
    if (loginBtn) {
      loginBtn.removeEventListener('click', handleLoginClick);
      loginBtn.addEventListener('click', handleLoginClick);
    }
    
    if (registerBtn) {
      registerBtn.removeEventListener('click', handleRegisterClick);
      registerBtn.addEventListener('click', handleRegisterClick);
    }
  }
  
  // Setup voice assistant button
  const voiceAssistantBtn = document.querySelector('.voice-assistant-btn');
  if (voiceAssistantBtn) {
    voiceAssistantBtn.removeEventListener('click', handleVoiceAssistantClick);
    voiceAssistantBtn.addEventListener('click', handleVoiceAssistantClick);
  }
}

// function handleNavLinkClick(e) {
//   e.preventDefault();
//   e.stopPropagation();
  
//   const section = this.getAttribute('data-section');
//   console.log('Nav link clicked for section:', section);
  
//   if (!section) {
//     console.error('No section specified for nav link');
//     return;
//   }
  
//   // Check if trying to access profile without login
//   if (section === 'profile' && !isLoggedIn) {
//     showToast('Please login first to access your profile', 'info');
//     showAuthModal('loginModal');
//     return;
//   }
  
//   navigateToSection(section);
// }

function handleNavLinkClick(e) {
  e.preventDefault();
  const section = this.dataset.section;

  // Prevent access to booking if not logged in
  if (section === 'booking' && !isLoggedIn) {
    showToast('Please login first to make a booking.', 'info');
    showAuthModal('loginModal');
    return;
  }

  navigateToSection(section);
}

function handleLoginClick(e) {
  e.preventDefault();
  e.stopPropagation();
  console.log('Login button clicked');
  showAuthModal('loginModal');
}

function handleRegisterClick(e) {
  e.preventDefault();
  e.stopPropagation();
  console.log('Register button clicked');
  showAuthModal('registerModal');
}

function handleVoiceAssistantClick(e) {
  e.preventDefault();
  e.stopPropagation();
  console.log('Voice assistant button clicked');
  openVoicePanel();
}

// function showSection(sectionId) {
//   console.log('Showing section:', sectionId);
  
//   // Hide all sections
//   document.querySelectorAll('.section').forEach(section => {
//     section.classList.remove('active');
//   });
  
//   // Show selected section
//   const targetSection = document.getElementById(sectionId);
//   if (targetSection) {
//     targetSection.classList.add('active');
//     console.log('Section displayed:', sectionId);
//   } else {
//     console.error('Section not found:', sectionId);
//     return;
//   }
  
//   // Handle specific section initialization
//   if (sectionId === 'booking') {
//     showTrainResults();
//   } else if (sectionId === 'profile') {
//     if (!isLoggedIn) {
//       showToast('Please login first to access your profile', 'info');
//       showAuthModal('loginModal');
//       return;
//     }
//     displayBookingHistory();
//     showProfileTab('dashboard');
//   } else if (sectionId === 'pnr') {
//     // Reset PNR form
//     const pnrForm = document.getElementById('pnrForm');
//     if (pnrForm) {
//       pnrForm.reset();
//     }
//     const pnrResults = document.getElementById('pnrResults');
//     if (pnrResults) {
//       pnrResults.classList.add('hidden');
//     }
//   } else if (sectionId === 'tracking') {
//     // Reset tracking form only if not coming from a direct track action
//     if (!window.skipTrackingReset) {
//       const trackingForm = document.getElementById('trackingForm');
//       if (trackingForm) {
//         trackingForm.reset();
//       }
//       const trackingResults = document.getElementById('trackingResults');
//       if (trackingResults) {
//         trackingResults.classList.add('hidden');
//       }
//     }
//     window.skipTrackingReset = false;
//   } else if (sectionId === 'uts') {
//     // Reset UTS to step 1 when navigating to UTS
//     goToStep(1);
//   }
// }

// Enhanced showSection function that FORCES passenger section to be hidden
function showSection(sectionId) {
    console.log('🔄 Showing section:', sectionId);

    // STEP 1: Hide ALL sections first
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
        section.style.display = 'none';
        section.style.visibility = 'hidden';
        section.style.opacity = '0';
    });

    // STEP 2: FORCE hide passenger section specifically
    const passengerSection = document.getElementById('passenger-section');
    if (passengerSection) {
        passengerSection.classList.add('hidden');
        passengerSection.classList.remove('active', 'visible');
        passengerSection.style.display = 'none !important';
        passengerSection.style.visibility = 'hidden !important';
        passengerSection.style.opacity = '0 !important';
        console.log('✅ Passenger section FORCED hidden');
    }

    // STEP 3: Show the target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.classList.remove('hidden');
        targetSection.style.display = 'block';
        targetSection.style.visibility = 'visible';
        targetSection.style.opacity = '1';
        console.log('✅ Section displayed:', sectionId);
    } else {
        console.error('❌ Section not found:', sectionId);
        return;
    }

    // STEP 4: Handle specific section initialization
    if (sectionId === 'booking') {
        showTrainResults();
        // DOUBLE CHECK: ensure passenger section stays hidden in booking
        if (passengerSection) {
            passengerSection.classList.add('hidden');
            passengerSection.style.display = 'none';
        }
    } else if (sectionId === 'profile') {
        if (!isLoggedIn) {
            showToast('Please login first to access your profile', 'info');
            showAuthModal('loginModal');
            return;
        }
        displayBookingHistory();
        showProfileTab('dashboard');
    } else if (sectionId === 'pnr') {
        const pnrForm = document.getElementById('pnrForm');
        if (pnrForm) pnrForm.reset();
        const pnrResults = document.getElementById('pnrResults');
        if (pnrResults) pnrResults.classList.add('hidden');
    } else if (sectionId === 'tracking') {
        if (!window.skipTrackingReset) {
            const trackingForm = document.getElementById('trackingForm');
            if (trackingForm) trackingForm.reset();
            const trackingResults = document.getElementById('trackingResults');
            if (trackingResults) trackingResults.classList.add('hidden');
        }
        window.skipTrackingReset = false;
    } else if (sectionId === 'uts') {
        goToStep(1);
    }

    // STEP 5: FINAL CHECK - ensure passenger section is never shown unless it's the target
    if (sectionId !== 'passenger-section' && passengerSection) {
        passengerSection.classList.add('hidden');
        passengerSection.style.display = 'none !important';
        passengerSection.style.visibility = 'hidden !important';
    }
}

function setupStationAutocomplete(inputId, suggestionsId, field) {
  const input = document.getElementById(inputId);
  const suggestionsContainer = document.getElementById(suggestionsId);
  
  if (!input || !suggestionsContainer) return;
  
  input.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    
    if (query.length < 2) {
      suggestionsContainer.classList.remove('active');
      return;
    }

    const filteredStations = applicationData.stations.filter(station => 
      station.name.toLowerCase().includes(query) ||
      station.code.toLowerCase().includes(query) ||
      station.city.toLowerCase().includes(query)
    ).slice(0, 8);

    if (filteredStations.length > 0) {
      displaySuggestions(filteredStations, suggestionsContainer, input, field);
    } else {
      suggestionsContainer.classList.remove('active');
    }
  });

  input.addEventListener('focus', function() {
    if (this.value.length >= 2) {
      const event = new Event('input');
      this.dispatchEvent(event);
    }
  });
}

function displaySuggestions(stations, container, input, field) {
  container.innerHTML = '';
  
  stations.forEach(station => {
    const suggestionItem = document.createElement('div');
    suggestionItem.className = 'suggestion-item';
    suggestionItem.innerHTML = `
      <div class="station-code">${station.code}</div>
      <div class="station-name">${station.name}</div>
      <div class="station-city">${station.city}</div>
    `;
    
    suggestionItem.addEventListener('click', function() {
      input.value = `${station.name} (${station.code})`;
      
      if (field === 'from') {
        currentBookingData.from = station;
      } else if (field === 'to') {
        currentBookingData.to = station;
      } else if (field === 'utsFrom') {
        utsBookingData.from = station;
      } else if (field === 'utsTo') {
        utsBookingData.to = station;
      }
      
      container.classList.remove('active');
      showToast(`${station.name} selected`, 'success');
    });
    
    container.appendChild(suggestionItem);
  });
  
  container.classList.add('active');
}

function swapStations() {
  const fromInput = document.getElementById('fromStation');
  const toInput = document.getElementById('toStation');
  
  if (fromInput && toInput) {
    const tempValue = fromInput.value;
    fromInput.value = toInput.value;
    toInput.value = tempValue;
    
    const tempStation = currentBookingData.from;
    currentBookingData.from = currentBookingData.to;
    currentBookingData.to = tempStation;
    
    showToast('Stations swapped', 'info');
  }
}

function setupInputChangeHandlers() {
  // Journey date
  const journeyDateInput = document.getElementById('journeyDate');
  if (journeyDateInput) {
    journeyDateInput.addEventListener('change', function() {
      currentBookingData.journeyDate = this.value;
    });
  }
  
  // UTS journey date
  const utsJourneyDateInput = document.getElementById('utsJourneyDate');
  if (utsJourneyDateInput) {
    utsJourneyDateInput.addEventListener('change', function() {
      utsBookingData.journeyDate = this.value;
    });
  }
}

function initializeDateInputs() {
  const today = new Date();
  const journeyDateInput = document.getElementById('journeyDate');
  const utsJourneyDateInput = document.getElementById('utsJourneyDate');
  
  if (journeyDateInput) {
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0];
    
    journeyDateInput.value = tomorrowString;
    currentBookingData.journeyDate = tomorrowString;
  }
  
  if (utsJourneyDateInput) {
    const todayString = today.toISOString().split('T')[0];
    utsJourneyDateInput.value = todayString;
    utsBookingData.journeyDate = todayString;
  }
}

// Enhanced route-based train search
function handleQuickBooking(e) {
  e.preventDefault();
  
  if (!validateBookingForm()) {
    return;
  }
  
  const submitButton = e.target.querySelector('button[type="submit"]');
  const originalText = submitButton.innerHTML;
  submitButton.innerHTML = '<span class="loading"></span> Searching trains on route...';
  submitButton.disabled = true;
  
  setTimeout(() => {
    submitButton.innerHTML = originalText;
    submitButton.disabled = false;
    generateRouteBasedTrainResults();
    showSection('booking');
    showToast(`Found ${currentBookingData.searchResults.length} trains on this route!`, 'success');
  }, 2000);
}

// Route-based train filtering - CORE ENHANCEMENT
function generateRouteBasedTrainResults() {
  const fromCode = currentBookingData.from.code;
  const toCode = currentBookingData.to.code;
  
  console.log(`Searching trains from ${fromCode} to ${toCode}`);
  
  // Filter trains that contain both stations in the correct order
  const filteredTrains = applicationData.trains.filter(train => {
    const fromIndex = train.route.indexOf(fromCode);
    const toIndex = train.route.indexOf(toCode);
    
    // Train must contain both stations and departure station must come before destination
    return fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex;
  });
  
  console.log(`Found ${filteredTrains.length} trains on route:`, filteredTrains);
  
  currentBookingData.searchResults = filteredTrains;
  
  // Update search summary and info
  updateSearchInfo();
  
  // Generate train cards
  const trainList = document.getElementById('trainList');
  if (!trainList) return;
  
  trainList.innerHTML = '';
  
  if (filteredTrains.length === 0) {
    trainList.innerHTML = `
      <div class="no-trains-found">
        <div style="text-align: center; padding: 3rem; color: var(--color-text-secondary);">
          <i class="fas fa-train" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
          <h3>No trains found on this route</h3>
          <p>There are no direct trains between ${currentBookingData.from.name} and ${currentBookingData.to.name}.</p>
          <p>Please try:</p>
          <ul style="list-style: none; padding: 0;">
            <li>• Checking nearby stations</li>
            <li>• Different travel dates</li>
            <li>• Connecting trains via major junctions</li>
          </ul>
        </div>
      </div>
    `;
    return;
  }
  
  filteredTrains.forEach(train => {
    const trainCard = createEnhancedTrainCard(train);
    trainList.appendChild(trainCard);
  });
}

function updateSearchInfo() {
  const searchSummary = document.getElementById('searchSummary');
  const searchInfo = document.getElementById('searchInfo');
  
  if (searchSummary) {
    const resultsText = currentBookingData.searchResults.length === 1 ? 'train' : 'trains';
    searchSummary.textContent = `${currentBookingData.searchResults.length} ${resultsText} available on this route`;
  }
  
  if (searchInfo) {
    searchInfo.innerHTML = `
      <div class="route-info">
        <div class="route-stations">
          <span>${currentBookingData.from.code}</span>
          <i class="fas fa-arrow-right route-arrow"></i>
          <span>${currentBookingData.to.code}</span>
        </div>
        <div class="search-details">
          <span><i class="fas fa-calendar"></i> ${formatDate(currentBookingData.journeyDate)}</span>
          <span><i class="fas fa-route"></i> ${currentBookingData.from.name} to ${currentBookingData.to.name}</span>
          <span><i class="fas fa-clock"></i> ${new Date().toLocaleTimeString()}</span>
        </div>
      </div>
    `;
  }
}

// Enhanced train card with complete route and highlighting
function createEnhancedTrainCard(train) {
  const card = document.createElement('div');
  card.className = 'train-card';
  
  // Get user's from and to indices in the train route
  const fromIndex = train.route.indexOf(currentBookingData.from.code);
  const toIndex = train.route.indexOf(currentBookingData.to.code);
  
  // Create route stations list with highlighting
  const routeStationsHtml = train.route.map((stationCode, index) => {
    const stationName = train.stationNames[index];
    let className = 'route-station';
    
    if (index === fromIndex || index === toIndex) {
      className += ' highlighted';
    }
    
    if (train.currentLocation && index === train.currentLocation.index) {
      className += ' current-location';
    }
    
    return `<span class="${className}" title="${stationName}">${stationCode}</span>`;
  }).join('');
  
  card.innerHTML = `
    <div class="train-header">
      <div class="train-main-info">
        <div class="train-info">
          <h3>${train.number} - ${train.name}</h3>
          <div class="train-name">${train.type} • ${train.days}</div>
        </div>
        <div class="train-timing">
          <div class="departure">
            <div class="time">${train.departure}</div>
            <div class="station">${currentBookingData.from.code}</div>
          </div>
          <div class="duration">
            <div class="travel-time">${train.duration}</div>
            <div class="route-line">
              <div class="route-dot"></div>
              <div class="route-path"></div>
              <div class="route-dot"></div>
            </div>
          </div>
          <div class="arrival">
            <div class="time">${train.arrival}</div>
            <div class="station">${currentBookingData.to.code}</div>
          </div>
        </div>
      </div>
      
      <div class="complete-route">
        <div class="route-title">Complete Route:</div>
        <div class="route-stations-list">
          ${routeStationsHtml}
        </div>
        ${train.currentLocation ? `
          <div class="current-location-indicator">
            <i class="fas fa-map-marker-alt"></i>
            <span>Currently at: <strong>${train.currentLocation.station}</strong></span>
          </div>
        ` : ''}
      </div>
    </div>
    
    <div class="availability-section">
      <div class="class-options">
        ${train.coaches.map(coach => `
          <div class="class-option available" data-coach="${coach.code}">
            <div class="class-name">${coach.name}</div>
            <div class="availability">Available ${coach.seats}</div>
            <div class="price">₹${coach.fare}</div>
          </div>
        `).join('')}
      </div>
      <div class="booking-actions">
        <button class="track-train-btn" onclick="trackTrainFromBooking('${train.number}')">
          <i class="fas fa-map-marker-alt"></i> Track Live
        </button>
        <button class="btn btn--primary book-btn" onclick="selectTrain('${train.number}')">
          <i class="fas fa-ticket-alt"></i> Book Now
        </button>
      </div>
    </div>
  `;
  
  return card;
}

function handlePNRCheck(e) {
  e.preventDefault();
  
  const pnrNumber = document.getElementById('pnrNumber').value.trim();
  
  if (!pnrNumber || pnrNumber.length !== 10) {
    showToast('Please enter a valid 10-digit PNR number', 'error');
    return;
  }
  
  const submitButton = e.target.querySelector('button[type="submit"]');
  const originalText = submitButton.innerHTML;
  submitButton.innerHTML = '<span class="loading"></span> Checking...';
  submitButton.disabled = true;
  
  setTimeout(() => {
    submitButton.innerHTML = originalText;
    submitButton.disabled = false;
    displayPNRResults(pnrNumber);
  }, 2000);
}

function displayPNRResults(pnrNumber) {
  const pnrResults = document.getElementById('pnrResults');
  if (!pnrResults) return;

  // Use existing booking data for demo
  const ticket = bookingHistory.find(t => t.type === 'reserved') || bookingHistory[0];
  
  // Update PNR display elements
  document.getElementById('pnrTrainInfo').textContent = `${ticket.trainNumber} - ${ticket.trainName}`;
  document.getElementById('pnrStatusBadge').textContent = ticket.status || 'Confirmed';
  document.getElementById('pnrFromStation').textContent = ticket.from.code;
  document.getElementById('pnrFromName').textContent = ticket.from.name;
  document.getElementById('pnrToStation').textContent = ticket.to.code;
  document.getElementById('pnrToName').textContent = ticket.to.name;
  document.getElementById('pnrDepartureTime').textContent = '16:35';
  document.getElementById('pnrArrivalTime').textContent = '08:35+1';
  
  // Display passenger list
  const passengerList = document.getElementById('pnrPassengerList');
  if (ticket.passengers) {
    passengerList.innerHTML = ticket.passengers.map(passenger => `
      <div class="passenger-item">
        <div class="passenger-details">
          <div class="passenger-name">${passenger.name}</div>
          <div class="passenger-info-text">${passenger.age}Y, ${passenger.gender}</div>
        </div>
        <div class="berth-info">
          <div class="berth-number">${passenger.seat}</div>
          <div class="berth-type">${passenger.berth}</div>
        </div>
      </div>
    `).join('');
  } else {
    passengerList.innerHTML = `
      <div class="passenger-item">
        <div class="passenger-details">
          <div class="passenger-name">Passenger 1</div>
          <div class="passenger-info-text">30Y, Male</div>
        </div>
        <div class="berth-info">
          <div class="berth-number">A1-15</div>
          <div class="berth-type">Lower</div>
        </div>
      </div>
    `;
  }
  
  pnrResults.classList.remove('hidden');
  showToast('PNR status retrieved successfully', 'success');
}

function handleTrainTracking(e) {
  e.preventDefault();
  
  const trainNumber = document.getElementById('trackingTrainNumber').value.trim();
  
  if (!trainNumber) {
    showToast('Please enter a train number', 'error');
    return;
  }
  
  const submitButton = e.target.querySelector('button[type="submit"]');
  const originalText = submitButton.innerHTML;
  submitButton.innerHTML = '<span class="loading"></span> Tracking...';
  submitButton.disabled = true;
  
  setTimeout(() => {
    submitButton.innerHTML = originalText;
    submitButton.disabled = false;
    displayEnhancedTrackingResults(trainNumber);
  }, 2000);
}

// Enhanced tracking from booking results
function trackTrainFromBooking(trainNumber) {
  // Set flag to prevent form reset
  window.skipTrackingReset = true;
  
  // Pre-populate tracking form
  const trackingInput = document.getElementById('trackingTrainNumber');
  if (trackingInput) {
    trackingInput.value = trainNumber;
  }
  
  // Navigate to tracking section
  navigateToSection('tracking');
  
  // Auto-search the train and ensure results are shown
  setTimeout(() => {
    displayEnhancedTrackingResults(trainNumber);
    showToast(`Live tracking: ${trainNumber}`, 'info');
    
    // Scroll to top to show results
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);
}

function displayEnhancedTrackingResults(trainNumber) {
  const trackingResults = document.getElementById('trackingResults');
  if (!trackingResults) return;

  // Find enhanced tracking data or generate from train data
  let trackingData = applicationData.enhancedTrackingData.find(t => t.trainNo === trainNumber);
  
  if (!trackingData) {
    // Generate tracking data from train database
    const train = applicationData.trains.find(t => t.number === trainNumber);
    if (train) {
      trackingData = generateTrackingData(train);
    } else {
      showToast('Train not found in our database', 'error');
      return;
    }
  }
  
  // Update train info header
  document.getElementById('trackedTrainName').textContent = trackingData.trainName;
  document.getElementById('trainRoute').textContent = trackingData.route;
  
  // Update status cards
  document.getElementById('currentStation').textContent = trackingData.currentStation;
  document.getElementById('currentStationCode').textContent = trackingData.currentStationCode;
  document.getElementById('trainStatusValue').textContent = trackingData.delay;
  document.getElementById('nextStation').textContent = trackingData.nextStation;
  document.getElementById('nextStationCode').textContent = trackingData.nextStationCode;
  document.getElementById('lastUpdated').textContent = trackingData.lastUpdated;
  
  // Apply delay styling
  const statusValue = document.getElementById('trainStatusValue');
  if (trackingData.delay.includes('Delayed')) {
    statusValue.classList.add('delay');
  } else {
    statusValue.classList.remove('delay');
  }
  
  // Generate enhanced route progress timeline
  generateEnhancedRouteTimeline(trackingData.routeStations);
  
  // Generate running status table
  generateRunningStatusTable(trackingData.routeStations);
  
  trackingResults.classList.remove('hidden');
  showToast('Live train tracking data updated', 'success');
}

function generateTrackingData(train) {
  const randomDelay = Math.random() > 0.6 ? Math.floor(Math.random() * 60) + 15 : 0;
  const currentIndex = train.currentLocation ? train.currentLocation.index : Math.floor(train.route.length / 2);
  
  return {
    trainNo: train.number,
    trainName: train.name,
    route: `${train.stationNames[0]} → ${train.stationNames[train.stationNames.length - 1]}`,
    currentStation: train.stationNames[currentIndex],
    currentStationCode: train.route[currentIndex],
    nextStation: currentIndex < train.route.length - 1 ? train.stationNames[currentIndex + 1] : 'Destination',
    nextStationCode: currentIndex < train.route.length - 1 ? train.route[currentIndex + 1] : train.route[train.route.length - 1],
    delay: randomDelay > 0 ? `Delayed by ${randomDelay} min` : 'On Time',
    speed: `${Math.floor(Math.random() * 40) + 60} km/h`,
    distanceCovered: `${Math.floor(Math.random() * 500) + 200} km`,
    lastUpdated: '1 min ago',
    routeStations: train.route.map((code, index) => ({
      code: code,
      name: train.stationNames[index],
      time: `${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
      status: index < currentIndex ? 'departed' : index === currentIndex ? 'current' : 'expected',
      platform: `${Math.floor(Math.random() * 10) + 1}`,
      delay: randomDelay > 0 ? `${randomDelay}` : '0'
    }))
  };
}

function generateEnhancedRouteTimeline(routeStations) {
  const routeTimeline = document.getElementById('routeTimeline');
  if (!routeTimeline) return;
  
  const timelineContainer = document.createElement('div');
  timelineContainer.className = 'timeline-container';
  
  routeStations.forEach((station, index) => {
    const stationElement = document.createElement('div');
    stationElement.className = 'timeline-station';
    
    const dot = document.createElement('div');
    dot.className = `timeline-dot ${station.status}`;
    
    const stationName = document.createElement('div');
    stationName.className = 'timeline-station-name';
    stationName.textContent = station.name;
    
    const stationTime = document.createElement('div');
    stationTime.className = 'timeline-station-time';
    stationTime.textContent = station.time;
    
    stationElement.appendChild(dot);
    stationElement.appendChild(stationName);
    stationElement.appendChild(stationTime);
    
    // Add connecting line (except for last station)
    if (index < routeStations.length - 1) {
      const line = document.createElement('div');
      line.className = `timeline-line ${station.status === 'departed' ? 'completed' : ''}`;
      stationElement.appendChild(line);
    }
    
    timelineContainer.appendChild(stationElement);
  });
  
  routeTimeline.innerHTML = '';
  routeTimeline.appendChild(timelineContainer);
}

// Enhanced running status table
function generateRunningStatusTable(routeStations) {
  const statusTable = document.getElementById('runningStatusTable');
  if (!statusTable) return;
  
  statusTable.innerHTML = `
    <div class="status-table-header">
      <div>Station</div>
      <div>Scheduled</div>
      <div>Actual</div>
      <div>Delay</div>
    </div>
  `;
  
  routeStations.forEach(station => {
    const delay = parseInt(station.delay) || 0;
    const actualTime = delay > 0 ? 
      `${station.time} (+${delay}m)` : 
      station.time;
    
    const row = document.createElement('div');
    row.className = 'status-table-row';
    row.innerHTML = `
      <div>
        <strong>${station.name}</strong><br>
        <small>${station.code}</small>
      </div>
      <div>${station.time}</div>
      <div>${actualTime}</div>
      <div style="color: ${delay > 0 ? 'var(--primary-orange)' : 'var(--accent-green)'}">${delay > 0 ? `+${delay}m` : 'On Time'}</div>
    `;
    
    if (station.status === 'current') {
      row.style.backgroundColor = 'var(--color-bg-4)';
      row.style.fontWeight = 'bold';
    }
    
    statusTable.appendChild(row);
  });
}

function validateBookingForm() {
  const errors = [];
  
  if (!currentBookingData.from) {
    errors.push('Please select departure station');
  }
  
  if (!currentBookingData.to) {
    errors.push('Please select destination station');
  }
  
  if (currentBookingData.from && currentBookingData.to && 
      currentBookingData.from.code === currentBookingData.to.code) {
    errors.push('Departure and destination stations cannot be the same');
  }
  
  if (!currentBookingData.journeyDate) {
    errors.push('Please select journey date');
  }
  
  if (errors.length > 0) {
    showToast(errors[0], 'error');
    return false;
  }
  
  return true;
}

function selectTrain(trainNumber) {
  currentBookingData.selectedTrain = trainNumber;
  const train = currentBookingData.searchResults.find(t => t.number === trainNumber);
  
  if (train) {
    showCoachSelection(train);
  }
}

function showCoachSelection(train) {
  // Update title
  const titleElement = document.getElementById('trainLayoutTitle');
  if (titleElement) {
    titleElement.textContent = `${train.number} - ${train.name}`;
  }
  
  // Generate enhanced coach layout
  generateEnhancedCoachLayout(train);
  
  // Show coach layout section
  showBookingSection('coachLayout');
  showToast('Select your preferred coach', 'info');
}

function generateEnhancedCoachLayout(train) {
  const coachList = document.getElementById('coachList');
  if (!coachList) return;
  
  coachList.innerHTML = '';
  
  // Add engine
  const engine = document.createElement('div');
  engine.className = 'coach';
  engine.innerHTML = '<i class="fas fa-train"></i><div class="coach-code">ENG</div><div class="coach-name">Engine</div>';
  coachList.appendChild(engine);
  
  // Add coaches with enhanced information
  train.coaches.forEach((coach, index) => {
    const coachElement = document.createElement('div');
    coachElement.className = `coach ${coach.layoutAvailable ? 'has-layout' : 'no-layout'}`;
    coachElement.innerHTML = `
      <i class="fas fa-${getCoachIcon(coach.code)}"></i>
      <div class="coach-code">${coach.code}${index + 1}</div>
      <div class="coach-name">${coach.name}</div>
    `;
    
    coachElement.addEventListener('click', () => {
      selectCoach(coach, `${coach.code}${index + 1}`);
    });
    
    coachList.appendChild(coachElement);
  });
}

function getCoachIcon(coachCode) {
  const icons = {
    '1A': 'crown',
    '2A': 'bed',
    '3A': 'layer-group',
    'CC': 'chair',
    'EC': 'user-tie',
    'SL': 'bed',
    'GS': 'users'
  };
  return icons[coachCode] || 'train';
}

function selectCoach(coach, coachNumber) {
  currentBookingData.selectedCoach = coachNumber;
  
  // Mark selected coach as active
  document.querySelectorAll('.coach').forEach(c => c.classList.remove('active'));
  event.target.closest('.coach').classList.add('active');
  
  // Check if coach is Chair Car or General - redirect to UTS
  if (coach.code === 'GS') {
    showToast('Chair class and General trains - Redirecting to UTS booking', 'info');
    setTimeout(() => {
      redirectToUTS();
    }, 1500);
    return;
  }
  
  if (!coach.layoutAvailable) {
    showLayoutUnavailable();
  } else {
    showSeatLayout(coach);
  }
}

function redirectToUTS() {
  // Pre-fill UTS form with current booking data
  if (currentBookingData.from) {
    const utsFromInput = document.getElementById('utsFromStation');
    if (utsFromInput) {
      utsFromInput.value = `${currentBookingData.from.name} (${currentBookingData.from.code})`;
      utsBookingData.from = currentBookingData.from;
    }
  }
  
  if (currentBookingData.to) {
    const utsToInput = document.getElementById('utsToStation');
    if (utsToInput) {
      utsToInput.value = `${currentBookingData.to.name} (${currentBookingData.to.code})`;
      utsBookingData.to = currentBookingData.to;
    }
  }
  
  navigateToSection('uts');
  goToStep(1);
}

function showLayoutUnavailable() {
  showBookingSection('layoutUnavailable');
  showToast('Seat layout not available for this coach', 'error');
}

function showSeatLayout(coach) {
  const layoutData = applicationData.seatLayouts[coach.code];
  if (!layoutData) {
    showLayoutUnavailable();
    return;
  }
  
  // Update title
  const titleElement = document.getElementById('seatLayoutTitle');
  if (titleElement) {
    titleElement.textContent = `Seat Selection - ${layoutData.name}`;
  }
  
  // Generate enhanced seat map
  generateEnhancedSeatMap(layoutData, coach);
  
  // Show seat layout section
  showBookingSection('seatLayout');
  showToast('Select your preferred seats', 'info');
}

function generateEnhancedSeatMap(layoutData, coach) {
  const seatMap = document.getElementById('seatMap');
  if (!seatMap) return;
  
  seatMap.innerHTML = `
    <div class="compartment-header">
      ${layoutData.name} - Coach ${currentBookingData.selectedCoach}
    </div>
  `;
  
  layoutData.layout.forEach((bay, bayIndex) => {
    const bayRow = document.createElement('div');
    bayRow.className = 'bay-row';
    
    // Bay number
    const bayNumber = document.createElement('div');
    bayNumber.className = 'bay-number';
    bayNumber.textContent = bay.bay;
    bayRow.appendChild(bayNumber);
    
    // Main seats
    const mainSeats = document.createElement('div');
    mainSeats.className = 'bay-seats';
    
    bay.seats.forEach(seat => {
      const seatElement = createEnhancedSeatElement(seat);
      mainSeats.appendChild(seatElement);
    });
    
    bayRow.appendChild(mainSeats);
    
    // Side berths
    if (bay.side && bay.side.length > 0) {
      const sideSeats = document.createElement('div');
      sideSeats.className = 'bay-seats side-berths';
      
      bay.side.forEach(seat => {
        const seatElement = createEnhancedSeatElement(seat);
        sideSeats.appendChild(seatElement);
      });
      
      bayRow.appendChild(sideSeats);
    }
    
    seatMap.appendChild(bayRow);
    
    // Add divider between bays
    if (bayIndex < layoutData.layout.length - 1) {
      const divider = document.createElement('div');
      divider.className = 'compartment-divider';
      seatMap.appendChild(divider);
    }
  });
  
  updateEnhancedBookingSummary(coach);
}

function createEnhancedSeatElement(seatData) {
  const seat = document.createElement('div');
  seat.className = 'seat available';
  seat.dataset.seatNumber = seatData.no;
  seat.dataset.seatType = seatData.type;
  
  // Randomly mark some seats as occupied for demo (30% chance)
  if (Math.random() < 0.3) {
    seat.className = 'seat occupied';
  }
  
  seat.innerHTML = `
    <div class="seat-number">${seatData.no}</div>
    <div class="seat-type">${seatData.type.replace('S.', 'S')}</div>
  `;
  
  if (!seat.classList.contains('occupied')) {
    seat.addEventListener('click', function() {
      toggleEnhancedSeatSelection(this);
    });
  }
  
  return seat;
}

function toggleEnhancedSeatSelection(seatElement) {
  const seatNumber = parseInt(seatElement.dataset.seatNumber);
  const seatType = seatElement.dataset.seatType;
  
  if (seatElement.classList.contains('selected')) {
    // Deselect seat
    seatElement.classList.remove('selected');
    seatElement.classList.add('available');
    
    // Remove from selected seats array
    currentBookingData.selectedSeats = currentBookingData.selectedSeats.filter(
      seat => seat.number !== seatNumber
    );
    
    showToast(`Seat ${seatNumber} deselected`, 'info');
  } else {
    // Check seat limit (max 6 seats)
    if (currentBookingData.selectedSeats.length >= 6) {
      showToast('Maximum 6 seats can be selected', 'error');
      return;
    }
    
    // Select seat
    seatElement.classList.remove('available');
    seatElement.classList.add('selected');
    
    // Add to selected seats array
    currentBookingData.selectedSeats.push({
      number: seatNumber,
      type: seatType,
      coach: currentBookingData.selectedCoach
    });
    
    showToast(`Seat ${seatNumber} selected`, 'success');
  }
  
  updateEnhancedBookingSummary();
}

function updateEnhancedBookingSummary(coach) {
  const selectedSeatsList = document.getElementById('selectedSeatsList');
  const baseFareAmount = document.getElementById('baseFareAmount');
  const seatCount = document.getElementById('seatCount');
  const bookingCharges = document.getElementById('bookingCharges');
  const totalFare = document.getElementById('totalFare');
  const proceedBtn = document.getElementById('proceedBtn');
  
  if (!selectedSeatsList || !baseFareAmount || !totalFare || !proceedBtn) return;
  
  if (currentBookingData.selectedSeats.length === 0) {
    selectedSeatsList.innerHTML = '<div style="color: var(--color-text-secondary); font-style: italic;">No seats selected</div>';
    baseFareAmount.textContent = '₹0';
    seatCount.textContent = '0';
    totalFare.textContent = '₹0';
    proceedBtn.disabled = true;
    proceedBtn.textContent = 'Select seats to proceed';
  } else {
    // Display selected seats with better formatting
    const seatList = currentBookingData.selectedSeats.map(seat => 
      `<div class="selected-seat-item">
        <span class="seat-number">${seat.coach}-${seat.number}</span>
        <span class="seat-type">${seat.type}</span>
      </div>`
    ).join('');
    selectedSeatsList.innerHTML = seatList;
    
    // Calculate enhanced fare
    const train = currentBookingData.searchResults.find(t => t.number === currentBookingData.selectedTrain);
    const selectedCoach = train?.coaches.find(c => currentBookingData.selectedCoach.startsWith(c.code));
    const baseFarePerSeat = selectedCoach ? selectedCoach.fare : 1000;
    const numberOfSeats = currentBookingData.selectedSeats.length;
    const charges = applicationData.fareStructure.taxes.bookingCharge;
    const totalFareAmount = (baseFarePerSeat * numberOfSeats) + charges;
    
    baseFareAmount.textContent = `₹${baseFarePerSeat}`;
    seatCount.textContent = numberOfSeats;
    bookingCharges.textContent = `₹${charges}`;
    totalFare.textContent = `₹${totalFareAmount}`;
    currentBookingData.totalFare = totalFareAmount;
    
    proceedBtn.disabled = false;
    proceedBtn.textContent = `Proceed to Passenger Details`;
  }
}

// CLEAN proceedToPassengerDetails function
function proceedToPassengerDetails() {
    console.log("🎫 PROCEED TO PASSENGER DETAILS");

    // Validate that seats are selected
    if (!currentBookingData.selectedSeats || currentBookingData.selectedSeats.length === 0) {
        showToast('Please select seats first!', 'error');
        return;
    }

    console.log(`✅ Found ${currentBookingData.selectedSeats.length} selected seats`);

    // Show passenger details WITHIN the booking section (not as a separate main section)
    showPassengerDetailsWithinBooking();
}

// Show passenger details within booking context
function showPassengerDetailsWithinBooking() {
    console.log("🎫 SHOWING PASSENGER DETAILS WITHIN BOOKING");

    try {
        // Hide booking subsections (but keep main booking section active)
        const subsectionsToHide = ['trainResults', 'coachLayout', 'seatLayout', 'layoutUnavailable'];
        subsectionsToHide.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.add('hidden');
                section.style.display = 'none';
            }
        });

        // Show the passenger section WITHIN booking
        const passengerSection = document.getElementById('passenger-section');
        if (passengerSection) {
            passengerSection.classList.remove('hidden');
            passengerSection.classList.add('visible');
            passengerSection.style.display = 'block';
            passengerSection.style.visibility = 'visible';
            passengerSection.style.opacity = '1';
            console.log("✅ Passenger section made visible within booking");
        } else {
            console.error("❌ passenger-section not found");
            return;
        }

        // Initialize the passenger form
        // initializePassengerForm();
        setupPassengerFormNavigation();

        console.log("✅ Passenger details setup complete");

    } catch (error) {
        console.error("❌ Error showing passenger section:", error);
        showToast('Error loading passenger details. Please try again.', 'error');
    }
}

// Initialize passenger form
// function initializePassengerForm() {
//     console.log("🔧 INITIALIZING PASSENGER FORM");

//     try {
//         // Get form elements
//         const form = document.getElementById('passengers-form');
//         const passengerOptions = document.querySelector('.passenger-options');
//         const savedPassBtn = document.getElementById('use-saved-passengers');
//         const newPassBtn = document.getElementById('add-new-passengers');

//         // Make passenger options visible
//         if (passengerOptions) {
//             passengerOptions.style.display = 'block';
//             passengerOptions.style.visibility = 'visible';
//             console.log("✅ Passenger options visible");
//         }

//         // Show initial instruction message
//         if (form) {
//             const instructionHTML = `
//                 <div class="passenger-instruction" style="
//                     text-align: center;
//                     padding: 2rem;
//                     background: #f8f9fa;
//                     border-radius: 8px;
//                     border: 2px dashed #dee2e6;
//                     margin: 1rem 0;
//                 ">
//                     <div style="margin-bottom: 1rem; font-size: 2rem;">🎫</div>
//                     <h3 style="color: #333; margin-bottom: 1rem;">Add Passenger Details</h3>
//                     <p style="color: #666; margin-bottom: 1.5rem;">
//                         You have selected <strong>${currentBookingData.selectedSeats.length}</strong> seat(s). 
//                         Choose how you want to add passenger information:
//                     </p>
//                     <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
//                         <div style="background: #e3f2fd; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">
//                             👥 Use saved passengers
//                         </div>
//                         <div style="background: #e8f5e8; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">
//                             ✏️ Enter new details
//                         </div>
//                     </div>
//                 </div>
//             `;

//             form.innerHTML = instructionHTML;
//             form.classList.remove('hidden');
//             form.style.display = 'block';
//             form.style.visibility = 'visible';
//         }

//         // Setup button event listeners
//         if (savedPassBtn) {
//             savedPassBtn.onclick = function(e) {
//                 e.preventDefault();
//                 console.log("🖱️ Use Saved Passengers clicked");
//                 showSavedPassengersForm();
//             };
//             savedPassBtn.style.display = 'inline-block';
//             savedPassBtn.style.opacity = '1';
//             console.log("✅ Saved passengers button setup");
//         }

//         if (newPassBtn) {
//             newPassBtn.onclick = function(e) {
//                 e.preventDefault();
//                 console.log("🖱️ Add New Passengers clicked");
//                 showNewPassengersForm();
//             };
//             newPassBtn.style.display = 'inline-block';
//             newPassBtn.style.opacity = '1';
//             console.log("✅ New passengers button setup");
//         }

//         // Initialize passengers array
//         if (!currentBookingData.passengers) {
//             currentBookingData.passengers = [];
//         }

//         console.log("✅ Passenger form initialization complete");

//     } catch (error) {
//         console.error("❌ Error initializing passenger form:", error);
//     }
// }

// function initializePassengerForm() {
//   const savedPassBtn = document.getElementById('use-saved-passengers');
//   const newPassBtn   = document.getElementById('add-new-passengers');
//   const savedForm    = document.getElementById('savedPassengersForm');
//   const newForm      = document.getElementById('newPassengerForm');

//   savedPassBtn.addEventListener('click', () => {
//     savedForm.classList.remove('hidden');
//     newForm.classList.add('hidden');
//   });

//   newPassBtn.addEventListener('click', () => {
//     newForm.classList.remove('hidden');
//     savedForm.classList.add('hidden');
//   });
// }

// function initializePassengerForm() {
//   const savedPassBtn = document.getElementById('use-saved-passengers');
//   const newPassBtn   = document.getElementById('add-new-passengers');
//   const savedForm    = document.getElementById('savedPassengersForm');
//   const newForm      = document.getElementById('newPassengerForm');
//   const addForm      = document.getElementById('addPassengerForm');

//   // Ensure both forms start hidden
//   savedForm.classList.add('hidden');
//   newForm.classList.add('hidden');

//   // Toggle to “Use Saved Passengers”
//   useSavedBtn.addEventListener('click', e => {
//     e.preventDefault();
//     useSavedBtn.classList.add('active');
//     addNewBtn.classList.remove('active');
//     renderSavedList();
//     savedForm.classList.remove('hidden');
//     newFormDiv.classList.add('hidden');
//   });

//   // Toggle to “Enter New Details”
//   addNewBtn.addEventListener('click', e => {
//     e.preventDefault();
//     addNewBtn.classList.add('active');
//     useSavedBtn.classList.remove('active');
//     newFormDiv.classList.remove('hidden');
//     savedForm.classList.add('hidden');
//     newFormDiv.querySelector('input[name="name"]').focus();
//   });

//   // Submit “Add New Passenger” when user presses Enter anywhere in the new-passenger form
//   newForm.querySelectorAll('input').forEach(input => {
//     input.addEventListener('keypress', e => {
//       if (e.key === 'Enter') {
//         e.preventDefault();
//         addForm.dispatchEvent(new Event('submit', { cancelable: true }));
//       }
//     });
//   });

//   // (Existing) handle form submission as before
//   if (addForm) {
//     addForm.addEventListener('submit', handleAddPassenger);
//   }
// }

function initializePassengerSection() {
  const useSavedBtn     = document.getElementById('use-saved-passengers');
  const addNewBtn       = document.getElementById('add-new-passengers');
  const savedFormDiv    = document.getElementById('savedPassengersForm');
  const newFormDiv      = document.getElementById('newPassengerForm');
  const addFormNew      = document.getElementById('addPassengerFormNew');
  const selectForm      = document.getElementById('selectPassengerForm');

  // Toggle to “Use Saved Passengers”
  useSavedBtn.addEventListener('click', e => {
    e.preventDefault();
    useSavedBtn.classList.add('active');
    addNewBtn.classList.remove('active');
    renderSavedList();
    savedFormDiv.classList.remove('hidden');
    newFormDiv.classList.add('hidden');
  });

  // Toggle to “Enter New Details”
  addNewBtn.addEventListener('click', e => {
    e.preventDefault();
    addNewBtn.classList.add('active');
    useSavedBtn.classList.remove('active');
    newFormDiv.classList.remove('hidden');
    savedFormDiv.classList.add('hidden');
    newFormDiv.querySelector('input[name="name"]').focus();
  });

  // Handle “Add New Passenger” submission
  addFormNew.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(addFormNew);
    const newPassenger = {
      id: Date.now(),
      name: formData.get('name'),
      age: formData.get('age'),
      gender: formData.get('gender')
    };
    savedPassengers.push(newPassenger);
    selectPassenger(newPassenger);
  });

  // Handle selecting a saved passenger
  selectForm.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
      const id = parseInt(e.target.dataset.id, 10);
      const passenger = savedPassengers.find(p => p.id === id);
      if (passenger) selectPassenger(passenger);
    }
  });

  function renderSavedList() {
    const savedList = document.getElementById('savedList');
    savedList.innerHTML = '';
    savedPassengers.forEach(p => {
      const li = document.createElement('li');
      li.textContent = `${p.name}, Age ${p.age}, ${p.gender === 'M' ? 'Male' : 'Female'}`;
      li.dataset.id = p.id;
      savedList.appendChild(li);
    });
  }

  function selectPassenger(passenger) {
    alert(`Selected ${passenger.name} for booking.`);
    // Add to booking data…
  }
}

// document.addEventListener('DOMContentLoaded', initializePassengerSection);

// function setupPassengerFormNavigation() {
//   const proceedBtn = document.getElementById('proceedToPaymentBtn');
//   if (proceedBtn) {
//     proceedBtn.addEventListener('click', () => {
//       // Validate passenger details have been entered
//       if (!validatePassengerDetails()) {
//         showToast('Please add at least one passenger.', 'error');
//         return;
//       }
//       showPaymentMethods();
//     });
//   }
//   // Call this after initializePassengerForm()
//   // setupPassengerFormNavigation();
// }
function setupPassengerFormNavigation() {
  const tabSaved     = document.getElementById('tabSaved');
  const tabNew       = document.getElementById('tabNew');
  const contentSaved = document.getElementById('contentSaved');
  const contentNew   = document.getElementById('contentNew');
  const savedList    = document.getElementById('savedList');
  const newForm      = document.getElementById('newPassengerForm');
  const nextBtn      = document.getElementById('proceedToPaymentBtn');

  // Temporary in-memory store of saved passengers
  let savedPassengers = [
    { id: 1, name: 'Alice', age: 30, gender: 'Female' },
    { id: 2, name: 'Bob',   age: 25, gender: 'Male' }
  ];
  let selectedPassengers = [];

  // Render the list of saved passengers
  function renderSavedList() {
    savedList.innerHTML = '';
    savedPassengers.forEach(p => {
      const li = document.createElement('li');
      li.textContent = `${p.name}, ${p.age}, ${p.gender}`;
      li.dataset.id = p.id;
      if (selectedPassengers.includes(p.id)) {
        li.classList.add('selected');
      }
      li.addEventListener('click', () => {
        if (selectedPassengers.includes(p.id)) {
          selectedPassengers = selectedPassengers.filter(id => id !== p.id);
          li.classList.remove('selected');
        } else {
          selectedPassengers.push(p.id);
          li.classList.add('selected');
        }
      });
      savedList.appendChild(li);
    });
  }

  // Tab click handlers
  tabSaved.addEventListener('click', () => {
    tabSaved.classList.add('active');
    tabNew.classList.remove('active');
    contentSaved.classList.remove('hidden');
    contentNew.classList.add('hidden');
    renderSavedList();
  });

  tabNew.addEventListener('click', () => {
    tabNew.classList.add('active');
    tabSaved.classList.remove('active');
    contentNew.classList.remove('hidden');
    contentSaved.classList.add('hidden');
  });

  // Handle new passenger form submission
  newForm.addEventListener('submit', e => {
    e.preventDefault();
    const name   = document.getElementById('passengerName').value.trim();
    const age    = parseInt(document.getElementById('passengerAge').value, 10);
    const gender = document.getElementById('passengerGender').value;
    if (!name || !age || !gender) {
      alert('Please fill in all fields.');
      return;
    }
    const id = Date.now();
    savedPassengers.push({ id, name, age, gender });
    selectedPassengers = [id];
    newForm.reset();
    // Switch back to saved tab and refresh list
    tabSaved.click();
  });

  // Next button: validate selection and proceed
  nextBtn.addEventListener('click', () => {
    if (selectedPassengers.length === 0) {
      alert('Please select or add at least one passenger.');
      return;
    }
    // Store selected passengers in booking data
    currentBookingData.passengers = savedPassengers.filter(p =>
      selectedPassengers.includes(p.id)
    );
    // Proceed to payment view
    showSection('payment');
  });

  // Initialize default tab
  tabSaved.click();
}
// addPassengerHidingCSS();
// setupPassengerFormNavigation();

function validatePassengerDetails() {
  // e.g., check applicationData.currentBookingData.passengers.length > 0
  return currentBookingData.passengers && currentBookingData.passengers.length > 0;
}

// Go back to seat selection
function goBackToSeatSelection() {
    console.log("⬅️ GOING BACK TO SEAT SELECTION");

    // Hide passenger section
    const passengerSection = document.getElementById('passenger-section');
    if (passengerSection) {
        passengerSection.classList.add('hidden');
        passengerSection.classList.remove('visible');
        passengerSection.style.display = 'none';
        passengerSection.style.visibility = 'hidden';
        passengerSection.style.opacity = '0';
        console.log("✅ Passenger section hidden");
    }

    // Show seat layout section
    const seatLayout = document.getElementById('seatLayout');
    if (seatLayout) {
        seatLayout.classList.remove('hidden');
        seatLayout.style.display = 'block';
        console.log("✅ Seat layout shown");
    }

    showToast('Returned to seat selection', 'info');
}

// Add CSS to force hide passenger section
function addPassengerHidingCSS() {
    const css = `
    /* FORCE HIDE PASSENGER SECTION BY DEFAULT */
    #passenger-section {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
    }

    /* Only show when explicitly made visible */
    #passenger-section.visible {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
    }

    /* Ensure sections are properly hidden */
    .section.hidden {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
    }

    .section.active {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
    }
    `;

    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    console.log('✅ Passenger hiding CSS added');
}

// Call CSS injection when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    addPassengerHidingCSS();
});

console.log("✅ Complete passenger section visibility fix loaded");

// function proceedToPayment() {
//   if (currentBookingData.selectedSeats.length > 0) {
//     showEnhancedPaymentModal();
//     setTimeout(() => {
//       processReservedTicketBooking();
//     }, 4000);
//   }
// }
function proceedToPayment() {
  if (!currentBookingData.paymentMethod) {
    showToast('Please select a payment method.', 'error');
    return;
  }
  // Trigger payment modal or API integration
  processReservedTicketBooking();
}

function showPaymentMethods() {
  // Hide passenger section
  document.getElementById('passenger-section').classList.add('hidden');

  // Show payment section
  const paySection = document.getElementById('payment-section');
  paySection.classList.remove('hidden');

  // Set up click handlers for each method
  paySection.querySelectorAll('.payment-methods button').forEach(btn => {
    btn.addEventListener('click', () => {
      currentBookingData.paymentMethod = btn.dataset.method;
      proceedToPayment();
    });
  });
}

function showEnhancedPaymentModal() {
  const modal = document.getElementById('paymentModal');
  const processingStep = document.getElementById('processingStep');
  
  if (modal) {
    modal.classList.remove('hidden');
    
    // Animate processing steps
    const steps = [
      'Validating payment details...',
      'Checking seat availability...',
      'Confirming reservation...',
      'Generating ticket...'
    ];
    
    let stepIndex = 0;
    const stepInterval = setInterval(() => {
      if (processingStep && stepIndex < steps.length) {
        processingStep.textContent = steps[stepIndex];
        stepIndex++;
      } else {
        clearInterval(stepInterval);
      }
    }, 1000);
  }
}

function processReservedTicketBooking() {
  // Generate enhanced ticket
  const train = currentBookingData.searchResults.find(t => t.number === currentBookingData.selectedTrain);
  const ticket = {
    id: generateTicketId(),
    type: 'reserved',
    pnr: generatePNR(),
    trainNumber: currentBookingData.selectedTrain,
    trainName: train?.name || 'Express Train',
    date: currentBookingData.journeyDate,
    from: currentBookingData.from,
    to: currentBookingData.to,
    passengers: currentBookingData.selectedSeats.map((seat, index) => ({
      name: `Passenger ${index + 1}`,
      age: 30 + index,
      gender: index % 2 === 0 ? 'Male' : 'Female',
      seat: `${seat.coach}-${seat.number}`,
      berth: seat.type
    })),
    totalFare: currentBookingData.totalFare,
    status: 'Confirmed',
    bookingDate: new Date().toISOString().split('T')[0],
    qrCode: generateQRCode()
  };
  
  // Add to booking history
  bookingHistory.unshift(ticket);
  
  // Hide payment modal
  const modal = document.getElementById('paymentModal');
  if (modal) {
    modal.classList.add('hidden');
  }
  
  // Show success and ticket
  showToast('Ticket booked successfully!', 'success');
  setTimeout(() => {
    showTicketModal(ticket);
  }, 1000);
}

// UTS Booking Functions
function setupUTSInputHandlers() {
  const inputs = ['ticketClass', 'utsQuota'];
  inputs.forEach(inputId => {
    const element = document.getElementById(inputId);
    if (element) {
      element.addEventListener('change', calculateUTSFare);
    }
  });
}

function setupPaymentMethods() {
  document.querySelectorAll('.payment-method').forEach(method => {
    method.addEventListener('click', function() {
      document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
      this.classList.add('selected');
      utsBookingData.paymentMethod = this.dataset.method;
    });
  });
}

function goToStep(stepNumber) {
  // Validate current step before proceeding
  if (stepNumber > utsBookingData.currentStep) {
    if (!validateUTSStep(utsBookingData.currentStep)) {
      return;
    }
  }
  
  // Hide all steps
  document.querySelectorAll('.step-content').forEach(step => {
    step.classList.add('hidden');
  });
  
  // Show target step
  const targetStep = document.getElementById(`utsStep${stepNumber}`);
  if (targetStep) {
    targetStep.classList.remove('hidden');
  }
  
  // Update step indicators
  document.querySelectorAll('.step').forEach(step => {
    step.classList.remove('active');
  });
  
  const activeStep = document.querySelector(`[data-step="${stepNumber}"]`);
  if (activeStep) {
    activeStep.classList.add('active');
  }
  
  utsBookingData.currentStep = stepNumber;
  
  // Calculate fare if on step 2 or 3
  if (stepNumber >= 2) {
    calculateUTSFare();
  }
}

function validateUTSStep(stepNumber) {
  if (stepNumber === 1) {
    const ticketClass = document.getElementById('ticketClass')?.value;
    const quota = document.getElementById('utsQuota')?.value;
    const journeyDate = document.getElementById('utsJourneyDate')?.value;
    
    if (!utsBookingData.from || !utsBookingData.to) {
      showToast('Please select both departure and destination stations', 'error');
      return false;
    }
    
    if (!journeyDate) {
      showToast('Please select journey date', 'error');
      return false;
    }
    
    if (!ticketClass || !quota) {
      showToast('Please select class and quota', 'error');
      return false;
    }
  } else if (stepNumber === 2) {
    if (utsBookingData.adultCount === 0 && utsBookingData.childCount === 0) {
      showToast('Please select at least one passenger', 'error');
      return false;
    }
  }
  
  return true;
}

function handleUTSBooking(e) {
  e.preventDefault();
  
  if (!validateUTSStep(3) || !utsBookingData.paymentMethod) {
    showToast('Please complete all required fields', 'error');
    return;
  }
  
  const submitButton = e.target.querySelector('button[type="submit"]');
  const originalText = submitButton.innerHTML;
  submitButton.innerHTML = '<span class="loading"></span> Processing...';
  submitButton.disabled = true;
  
  showEnhancedPaymentModal();
  
  setTimeout(() => {
    submitButton.innerHTML = originalText;
    submitButton.disabled = false;
    processUTSTicketBooking();
  }, 4000);
}

function processUTSTicketBooking() {
  const ticketClass = document.getElementById('ticketClass')?.value;
  const quota = document.getElementById('utsQuota')?.value;
  
  // Generate UTS ticket with enhanced data
  const ticket = {
    id: generateTicketId(),
    type: 'general',
    journeyDate: utsBookingData.journeyDate,
    from: utsBookingData.from,
    to: utsBookingData.to,
    class: ticketClass === 'first' ? 'First Class' : 'Second Class',
    quota: applicationData.quotaOptions.find(q => q.code === quota)?.name || 'General',
    adultCount: utsBookingData.adultCount,
    childCount: utsBookingData.childCount,
    totalFare: utsBookingData.totalFare,
    bookingDate: new Date().toISOString().split('T')[0],
    qrCode: generateQRCode()
  };
  
  // Add to booking history
  bookingHistory.unshift(ticket);
  
  // Hide payment modal
  const modal = document.getElementById('paymentModal');
  if (modal) {
    modal.classList.add('hidden');
  }
  
  // Show success and ticket
  showToast('UTS Ticket generated successfully!', 'success');
  setTimeout(() => {
    showTicketModal(ticket);
    resetUTSForm();
  }, 1000);
}

function resetUTSForm() {
  utsBookingData = {
    from: null,
    to: null,
    journeyDate: new Date().toISOString().split('T')[0],
    class: null,
    quota: null,
    adultCount: 1,
    childCount: 0,
    totalFare: 0,
    paymentMethod: null,
    currentStep: 1
  };
  
  document.getElementById('utsForm').reset();
  document.getElementById('utsFromStation').value = '';
  document.getElementById('utsToStation').value = '';
  
  // Reset date input
  const utsJourneyDateInput = document.getElementById('utsJourneyDate');
  if (utsJourneyDateInput) {
    utsJourneyDateInput.value = utsBookingData.journeyDate;
  }
  
  // Hide adult/child panel
  const passengerTypePanel = document.getElementById('passengerTypePanel');
  const standardPassengerInfo = document.getElementById('standardPassengerInfo');
  if (passengerTypePanel) passengerTypePanel.style.display = 'none';
  if (standardPassengerInfo) standardPassengerInfo.style.display = 'block';
  
  updatePassengerCounts();
  goToStep(1);
}

// Ticket History Functions
function setupTicketFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const filter = this.dataset.filter;
      displayBookingHistory(filter);
      displayProfileBookings(filter);
    });
  });
}

function displayBookingHistory(filter = 'all') {
  const historyContainer = document.getElementById('ticketHistory');
  if (!historyContainer) return;
  
  let filteredTickets = bookingHistory;
  
  if (filter === 'reserved') {
    filteredTickets = bookingHistory.filter(ticket => ticket.type === 'reserved');
  } else if (filter === 'general') {
    filteredTickets = bookingHistory.filter(ticket => ticket.type === 'general');
  } else if (filter === 'upcoming') {
    const today = new Date().toISOString().split('T')[0];
    filteredTickets = bookingHistory.filter(ticket => {
      const ticketDate = ticket.date || ticket.journeyDate;
      return ticketDate >= today;
    });
  }
  
  historyContainer.innerHTML = '';
  
  if (filteredTickets.length === 0) {
    historyContainer.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--color-text-secondary);">
        <i class="fas fa-ticket-alt" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
        <p>No tickets found</p>
      </div>
    `;
    return;
  }
  
  filteredTickets.forEach(ticket => {
    const ticketCard = createTicketCard(ticket);
    historyContainer.appendChild(ticketCard);
  });
}

function createTicketCard(ticket) {
  const card = document.createElement('div');
  card.className = 'ticket-card';
  card.onclick = () => showTicketModal(ticket);
  
  if (ticket.type === 'reserved') {
    card.innerHTML = `
      <div class="ticket-header">
        <h3>${ticket.trainNumber} - ${ticket.trainName}</h3>
        <span class="ticket-type-badge reserved">Reserved</span>
      </div>
      <div class="ticket-journey">
        <div class="journey-route">${ticket.from.code} → ${ticket.to.code}</div>
        <div class="journey-date">${formatDate(ticket.date)}</div>
      </div>
      <div class="ticket-details">
        <div><strong>PNR:</strong> ${ticket.pnr}</div>
        <div><strong>Status:</strong> ${ticket.status}</div>
        <div><strong>Passengers:</strong> ${ticket.passengers.length}</div>
        <div><strong>Fare:</strong> ₹${ticket.totalFare}</div>
      </div>
    `;
  } else {
    card.innerHTML = `
      <div class="ticket-header">
        <h3>UTS Ticket</h3>
        <span class="ticket-type-badge general">General</span>
      </div>
      <div class="ticket-journey">
        <div class="journey-route">${ticket.from.code} → ${ticket.to.code}</div>
        <div class="journey-date">${formatDate(ticket.journeyDate)}</div>
      </div>
      <div class="ticket-details">
        <div><strong>Class:</strong> ${ticket.class}</div>
        <div><strong>Quota:</strong> ${ticket.quota}</div>
        <div><strong>Adults:</strong> ${ticket.adultCount || 1}</div>
        <div><strong>Children:</strong> ${ticket.childCount || 0}</div>
        <div><strong>Fare:</strong> ₹${ticket.totalFare}</div>
      </div>
    `;
  }
  
  return card;
}

// Enhanced ticket modal with QR code
function showTicketModal(ticket) {
  const modal = document.getElementById('ticketModal');
  const ticketDetails = document.getElementById('ticketDetails');
  
  if (!modal || !ticketDetails) return;
  
  if (ticket.type === 'reserved') {
    ticketDetails.innerHTML = `
      <div class="ticket-info">
        <h4>${ticket.trainNumber} - ${ticket.trainName}</h4>
        <p><strong>PNR:</strong> ${ticket.pnr}</p>
        <p><strong>Date:</strong> ${formatDate(ticket.date)}</p>
        <p><strong>Route:</strong> ${ticket.from.name} → ${ticket.to.name}</p>
        <p><strong>Status:</strong> ${ticket.status}</p>
      </div>
      
      <div class="passenger-details">
        <h4>Passenger Details</h4>
        ${ticket.passengers.map(passenger => `
          <div class="passenger-info">
            <p><strong>${passenger.name}</strong> (Age: ${passenger.age}, ${passenger.gender})</p>
            <p>Seat: ${passenger.seat} (${passenger.berth})</p>
          </div>
        `).join('')}
      </div>
      
      <div class="qr-container">
        <h4>QR Code</h4>
        <div class="qr-code-display" id="ticketQRCode">
          <div class="qr-placeholder">
            <i class="fas fa-qrcode"></i>
          </div>
        </div>
        <div class="qr-info">Scan this QR code for ticket verification</div>
      </div>
      
      <div class="fare-summary">
        <p><strong>Total Fare: ₹${ticket.totalFare}</strong></p>
      </div>
    `;
  } else {
    ticketDetails.innerHTML = `
      <div class="ticket-info">
        <h4>UTS Ticket</h4>
        <p><strong>Journey Date:</strong> ${formatDate(ticket.journeyDate)}</p>
        <p><strong>Route:</strong> ${ticket.from.name} → ${ticket.to.name}</p>
        <p><strong>Class:</strong> ${ticket.class}</p>
        <p><strong>Quota:</strong> ${ticket.quota}</p>
        <p><strong>Adult Passengers:</strong> ${ticket.adultCount || 1}</p>
        <p><strong>Child Passengers:</strong> ${ticket.childCount || 0}</p>
      </div>
      
      <div class="qr-container">
        <h4>QR Code</h4>
        <div class="qr-code-display" id="ticketQRCode">
          <div class="qr-placeholder">
            <i class="fas fa-qrcode"></i>
          </div>
        </div>
        <div class="qr-info">Scan this QR code for ticket verification</div>
      </div>
      
      <div class="fare-summary">
        <p><strong>Total Fare: ₹${ticket.totalFare}</strong></p>
      </div>
    `;
  }
  
  modal.classList.remove('hidden');
  
  // Generate QR code after modal is shown
  setTimeout(() => {
    generateQRCodeForTicket(ticket, 'ticketQRCode');
  }, 100);
}

function closeTicketModal() {
  const modal = document.getElementById('ticketModal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Navigation Functions
function showTrainResults() {
  showBookingSection('trainResults');
}

function showCoachLayout() {
  showBookingSection('coachLayout');
}

function showBookingSection(sectionId) {
  document.querySelectorAll('.booking-section').forEach(section => {
    section.classList.add('hidden');
  });
  
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.remove('hidden');
  }
}

// Utility Functions
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  
  const toastIcon = toast.querySelector('.toast-icon');
  const toastMessage = toast.querySelector('.toast-message');
  
  const icons = {
    success: 'fas fa-check-circle',
    error: 'fas fa-exclamation-triangle',
    info: 'fas fa-info-circle'
  };
  
  toastIcon.className = `toast-icon ${icons[type]}`;
  toastMessage.textContent = message;
  
  toast.className = `toast ${type}`;
  
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 300);
  }, 4000);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', { 
    day: '2-digit', 
    month: 'short', 
    year: 'numeric' 
  });
}

function generateTicketId() {
  return 'TKT' + Date.now().toString().slice(-6);
}

function generatePNR() {
  return Math.floor(1000000000 + Math.random() * 9000000000).toString();
}

function generateQRCode() {
  return 'QR' + Date.now().toString() + Math.random().toString(36).substr(2, 5);
}

// Initialize when DOM is loaded
console.log('AI-Enhanced Indian Railways Booking System with Enhanced UTS, Navigation Fixed, Date Selection, Dynamic Fare Calculation, and QR Code Generation Loaded Successfully!');
