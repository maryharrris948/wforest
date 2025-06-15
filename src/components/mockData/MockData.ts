import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      firstName: 'Timothy Bernando',
      lastName: '',
      mobileNumber: '+1-***-***-****',
      email: 'timbernando38@gmail.com',
      createdOn: '2/5/2025', // m/d/y
      username: 'sample',
      password: 'sample'
    },
    bank_details: {
      account_type: 'Checking',
      account_name: false,
      account_number: false,
      balance_usd: 75225120.17
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'February 3, 2025',
        description: 'AirBnB Hawaii debit',
        status: 'Success',
        amount_usd: -4850.0
      },
      {
        dateTime: 'February 2, 2025',
        description: 'Debit from United airlines',
        status: 'Success',
        amount_usd: -1800.0
      },
      {
        dateTime: 'January 28, 2025',
        description: 'Withdrawal from R&B trading',
        status: 'Success',
        amount_usd: 850050.17
      },
      {
        dateTime: 'January 26, 2025',
        description: 'Withdrawal chk#229152',
        status: 'Success',
        amount_usd: -250120.0
      },
      {
        dateTime: 'December 29, 2024',
        description: 'Debit from Walmart',
        status: 'Success',
        amount_usd: -1200.0
      },
      {
        dateTime: 'December 17, 2024',
        description: 'Teller Withdrawal',
        status: 'Success',
        amount_usd: -50000.0
      },
      {
        dateTime: 'December 15, 2024',
        description: 'Credit from fidelity investment',
        status: 'Success',
        amount_usd: 980000.0
      },
      {
        dateTime: 'December 13, 2024',
        description: 'Transfer to Joe Harden',
        status: 'Success',
        amount_usd: -320000.0
      },
      {
        dateTime: 'August 5, 2024',
        description: 'Debit from Netgear',
        status: 'Success',
        amount_usd: -200000.0,
        account_no: '****4593'
      },
      {
        dateTime: 'March 22, 2024',
        description: 'Transfer to Infrastructure Development',
        status: 'Success',
        amount_usd: -400000.0,
        account_no: '****1682'
      },
      {
        dateTime: 'October 10, 2023',
        description: 'Credit from D&D Building',
        status: 'Success',
        amount_usd: 150000.0,
        account_no: '****8293'
      },
      {
        dateTime: 'September 25, 2023',
        description: 'Debit from MHunlimiteds USA',
        status: 'Success',
        amount_usd: -500000.0,
        account_no: '****4527'
      },
      {
        dateTime: 'August 15, 2023',
        description: 'Debit from Western Digital',
        status: 'Success',
        amount_usd: -300000.0,
        account_no: '****6471'
      },
      {
        dateTime: 'July 5, 2023',
        description: 'Credit from Asana',
        status: 'Success',
        amount_usd: 350000.0,
        account_no: '****3975'
      },
      {
        dateTime: 'June 10, 2023',
        description: 'Credit from Seagate Technology',
        status: 'Success',
        amount_usd: 150000.0,
        account_no: '****2849'
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      firstName: 'Rogers Rahn Fitzgerald',
      mobileNumber: '***-***-****',
      email: 'r***@gmail.com',
      createdOn: '6/15/2025', // m/d/y
      username: "WoodbeckieRoddy!",
      password: "JasonwayneRoddy"
    },
    bank_details: {
      account_type: 'Checking',
      account_name: false,
      account_number: true,
      balance_usd: 760870.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Welcome to your new account. To complete your first transfer, a required VAT processing fee of $1,107.59 must be paid. This one-time fee ensures compliance with financial regulations. For questions or assistance, please contact our support team.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: "July 6 2023, 3:00:02pm",
        description: "Celeb City Farms",
        status: "Success",
        amount_usd: 4000.0,
      },
      {
        dateTime: "January 10 2023, 5:15:02pm",
        description: "Company Officials",
        status: "Success",
        amount_usd: -15750.0,
      },
      {
        dateTime: "December 5 2022, 8:30:08am",
        description: "Transfer from Tee~Energy services",
        status: "Success",
        amount_usd: 3100.0,
      },
      {
        dateTime: "October 19 2022, 1:03:05pm",
        description: "Company Van Maintenance",
        status: "Success",
        amount_usd: -1500.0,
      },
      {
        dateTime: "September 13 2021, 2:10:06pm",
        description: "Transfer from Nikky&co enterprises",
        status: "Success",
        amount_usd: 4500.0,
      },
      {
        dateTime: "June 24 2021, 9:00:13am",
        description: "Appointment Form Payment",
        status: "Success",
        amount_usd: 650.0,
      },
      {
        dateTime: "February 3 2020, 4:22:05pm",
        description: "Department Workers",
        status: "Success",
        amount_usd: -10000.0,
      },
      {
        dateTime: "January 8 2020, 10:11:22am",
        description: "Transfer from Chad Estate Management",
        status: "Success",
        amount_usd: 7500.0,
      },
      {
        dateTime: "May 20 2019, 2:00pm",
        description: "Bammy Work Wear and Maintenance",
        status: "Success",
        amount_usd: -4500.0,
      },
      {
        dateTime: "March 23 2019, 8:50am",
        description: "Transfer from JayJay Group",
        status: "Success",
        amount_usd: 12000.0,
      },
      {
        dateTime: "August 23 2018, 8:50am",
        description: "Transfer to Nikky&co enterprises",
        status: "Success",
        amount_usd: -66500.0,
      },
      {
        dateTime: "March 23 2018, 8:50am",
        description: "Transfer from Tee~Energy services",
        status: "Success",
        amount_usd: 33200.0,
      },
      {
        dateTime: "November 15 2023, 12:45:00pm",
        description: "Office Supplies Purchase",
        status: "Success",
        amount_usd: -2300.0,
      },
      {
        dateTime: "April 9 2022, 11:30:45am",
        description: "Refund from Vendor",
        status: "Success",
        amount_usd: 1200.0,
      },
      {
        dateTime: "February 18 2021, 10:05:23am",
        description: "IT Equipment Maintenance",
        status: "Success",
        amount_usd: -7800.0,
      },
      {
        dateTime: "December 29 2020, 2:22:11pm",
        description: "Transfer to Company Savings",
        status: "Success",
        amount_usd: 5000.0,
      },
      {
        dateTime: "July 4 2019, 3:14:52pm",
        description: "Employee Travel Reimbursement",
        status: "Success",
        amount_usd: -4200.0,
      },
      {
        dateTime: "October 10 2018, 4:50:35pm",
        description: "Transfer from Parent Organization",
        status: "Success",
        amount_usd: 20000.0,
      },
    ],
  }
];
