export const mockVerificationUsers = [
  {
    id: 1,
    name: 'James Hadish',
    email: 'sara.cruz@example.com',
    userType: 'Service Provider',
    applicationDate: 'Feb 25, 2022',
    status: 'Verified',
    occupation: 'Marketing Coordinator',
    verificationChecklist: {
      phoneNumber: {
        completed: true,
        title: 'Phone number',
        description: 'Protect your account from unauthorized access and receive important updates by verifying your phone number'
      },
      homeAddress: {
        completed: true,
        title: 'Home address',
        description: 'Provide your home address to help us connect you with nearby service providers and enable location-based services'
      },
      profilePhoto: {
        completed: true,
        title: 'Profile photo',
        description: 'Personalize your presence and make it easier for others to recognize and connect with you by adding a profile picture'
      },
      kycVerification: {
        completed: true,
        status: 'verified', // verified, pending, rejected
        title: 'KYC verification',
        description: 'By verifying your identity, we can maintain the integrity of our platform and protect your account from unauthorized access'
      }
    }
  },
  {
    id: 2,
    name: 'Albert Flores',
    email: 'sara.cruz@example.com',
    userType: 'Client',
    applicationDate: 'Feb 25, 2022',
    status: 'Verified',
    occupation: 'Business Owner',
    verificationChecklist: {
      phoneNumber: {
        completed: true,
        title: 'Phone number',
        description: 'Protect your account from unauthorized access and receive important updates by verifying your phone number'
      },
      homeAddress: {
        completed: true,
        title: 'Home address',
        description: 'Provide your home address to help us connect you with nearby service providers and enable location-based services'
      },
      profilePhoto: {
        completed: true,
        title: 'Profile photo',
        description: 'Personalize your presence and make it easier for others to recognize and connect with you by adding a profile picture'
      },
      kycVerification: {
        completed: true,
        status: 'verified',
        title: 'KYC verification',
        description: 'By verifying your identity, we can maintain the integrity of our platform and protect your account from unauthorized access'
      }
    }
  },
  {
    id: 3,
    name: 'Jane Cooper',
    email: 'michael.mitc@example.com',
    userType: 'Service Provider',
    applicationDate: 'Feb 25, 2022',
    status: 'Verified',
    occupation: 'Graphic Designer',
    verificationChecklist: {
      phoneNumber: {
        completed: true,
        title: 'Phone number',
        description: 'Protect your account from unauthorized access and receive important updates by verifying your phone number'
      },
      homeAddress: {
        completed: true,
        title: 'Home address',
        description: 'Provide your home address to help us connect you with nearby service providers and enable location-based services'
      },
      profilePhoto: {
        completed: true,
        title: 'Profile photo',
        description: 'Personalize your presence and make it easier for others to recognize and connect with you by adding a profile picture'
      },
      kycVerification: {
        completed: true,
        status: 'verified',
        title: 'KYC verification',
        description: 'By verifying your identity, we can maintain the integrity of our platform and protect your account from unauthorized access'
      }
    }
  },
  {
    id: 4,
    name: 'Jacob Jones',
    email: 'debra.holt@example.com',
    userType: 'Service Provider',
    applicationDate: 'Feb 25, 2022',
    status: 'Verified',
    occupation: 'Web Developer',
    verificationChecklist: {
      phoneNumber: {
        completed: true,
        title: 'Phone number',
        description: 'Protect your account from unauthorized access and receive important updates by verifying your phone number'
      },
      homeAddress: {
        completed: true,
        title: 'Home address',
        description: 'Provide your home address to help us connect you with nearby service providers and enable location-based services'
      },
      profilePhoto: {
        completed: true,
        title: 'Profile photo',
        description: 'Personalize your presence and make it easier for others to recognize and connect with you by adding a profile picture'
      },
      kycVerification: {
        completed: true,
        status: 'verified',
        title: 'KYC verification',
        description: 'By verifying your identity, we can maintain the integrity of our platform and protect your account from unauthorized access'
      }
    }
  },
  {
    id: 5,
    name: 'Darlene Robertson',
    email: 'michael.mitc@example.com',
    userType: 'Client',
    applicationDate: 'Feb 25, 2022',
    status: 'Unverified',
    occupation: 'Marketing Coordinator',
    verificationChecklist: {
      phoneNumber: {
        completed: true,
        title: 'Phone number',
        description: 'Protect your account from unauthorized access and receive important updates by verifying your phone number'
      },
      homeAddress: {
        completed: true,
        title: 'Home address',
        description: 'Provide your home address to help us connect you with nearby service providers and enable location-based services'
      },
      profilePhoto: {
        completed: true,
        title: 'Profile photo',
        description: 'Personalize your presence and make it easier for others to recognize and connect with you by adding a profile picture'
      },
      kycVerification: {
        completed: false,
        status: 'pending',
        title: 'KYC verification',
        description: 'By verifying your identity, we can maintain the integrity of our platform and protect your account from unauthorized access'
      }
    }
  },
  {
    id: 6,
    name: 'Courtney Henry',
    email: 'tim.jennings@example.com',
    userType: 'Client',
    applicationDate: 'Feb 25, 2022',
    status: 'Unverified',
    occupation: 'Product Manager',
    verificationChecklist: {
      phoneNumber: {
        completed: true,
        title: 'Phone number',
        description: 'Protect your account from unauthorized access and receive important updates by verifying your phone number'
      },
      homeAddress: {
        completed: true,
        title: 'Home address',
        description: 'Provide your home address to help us connect you with nearby service providers and enable location-based services'
      },
      profilePhoto: {
        completed: true,
        title: 'Profile photo',
        description: 'Personalize your presence and make it easier for others to recognize and connect with you by adding a profile picture'
      },
      kycVerification: {
        completed: false,
        status: 'pending',
        title: 'KYC verification',
        description: 'By verifying your identity, we can maintain the integrity of our platform and protect your account from unauthorized access'
      }
    }
  },
  {
    id: 7,
    name: 'Bessie Cooper',
    email: 'curtis.weaver@example.com',
    userType: 'Service Provider',
    applicationDate: 'Feb 25, 2022',
    status: 'Rejected',
    occupation: 'Photographer',
    verificationChecklist: {
      phoneNumber: {
        completed: true,
        title: 'Phone number',
        description: 'Protect your account from unauthorized access and receive important updates by verifying your phone number'
      },
      homeAddress: {
        completed: true,
        title: 'Home address',
        description: 'Provide your home address to help us connect you with nearby service providers and enable location-based services'
      },
      profilePhoto: {
        completed: true,
        title: 'Profile photo',
        description: 'Personalize your presence and make it easier for others to recognize and connect with you by adding a profile picture'
      },
      kycVerification: {
        completed: false,
        status: 'rejected',
        title: 'KYC verification',
        description: 'By verifying your identity, we can maintain the integrity of our platform and protect your account from unauthorized access'
      }
    }
  },
  {
    id: 8,
    name: 'Guy Hawkins',
    email: 'sara.cruz@example.com',
    userType: 'Service Provider',
    applicationDate: 'Feb 25, 2022',
    status: 'Rejected',
    occupation: 'Video Editor',
    verificationChecklist: {
      phoneNumber: {
        completed: true,
        title: 'Phone number',
        description: 'Protect your account from unauthorized access and receive important updates by verifying your phone number'
      },
      homeAddress: {
        completed: true,
        title: 'Home address',
        description: 'Provide your home address to help us connect you with nearby service providers and enable location-based services'
      },
      profilePhoto: {
        completed: true,
        title: 'Profile photo',
        description: 'Personalize your presence and make it easier for others to recognize and connect with you by adding a profile picture'
      },
      kycVerification: {
        completed: false,
        status: 'rejected',
        title: 'KYC verification',
        description: 'By verifying your identity, we can maintain the integrity of our platform and protect your account from unauthorized access'
      }
    }
  }
]

export const verificationStats = {
  allUsers: 75531,
  verifiedUsers: 56123,
  pendingVerification: 9000,
  rejectedUsers: 10405
}