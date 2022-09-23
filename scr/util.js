import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    const result = JSON.parse(data);
    if (result !== null) {
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};

//Generate, Store and Retrieve UUID => USER UNIQUE IDENTIFIER
async function defineUUID() {
  return `uid${Number(Date.now())}`;
}

async function getActiveNumber() {
  let res = await getData('activeNo');
  if (res == undefined) {
    res = {};
  }
  //console.log('active number ', res);
  return res;
}

async function saveActiveNumber(number) {
  await AsyncStorage.setItem('activeNo', JSON.stringify(number));
}

//Get User Numbers Data
async function getUserNumbers() {
  let userNumbers = await getData('userNumbers');
  if (userNumbers == undefined) {
    return [];
  }
  //console.log('userNumbers ', userNumbers);
  return userNumbers;
}

async function setUserNumbers(numbers) {
  await AsyncStorage.setItem('userNumbers', JSON.stringify(numbers));
}

//Get User Frequently used numbers Data
async function getFreqUsedNo() {
  let FreqUsedNo = await JSON.parse(await AsyncStorage.getItem('FreqUsedNo'));
  if (FreqUsedNo === null) return [];
  return FreqUsedNo;
}

//Get Previous Payment Processes Data
async function getPaymentProcessesData() {
  let PaymentProcesses = await JSON.parse(
    await AsyncStorage.getItem('PaymentProcesses'),
  );
  if (PaymentProcesses === null) return [];
  return PaymentProcesses;
}

//PhoneNumberObject
let phoneNumberObj = {
  id: '',
  limit: 0,
  consumed: 0,
  renewalDate: new Date(),
  renewalPeriod: 0, //1- daily 2-weekly 3-monthly 4- yearly
  network: 0,
  phoneNo: '',
};

let freqUsedNoObj = {
  number: '',
  counter: 0,
};

let PaymentProcess = {
  providerNumber: '',
  recipientNumber: 0,
  paymentType: 0,
  value: 0,
  cost: 0,
  return: 0,
  returnPrecentage: 0,
  paymentId: 0,
  network: 0,
  date: 0,
};

const homeScreenIcons = [
  {
    id: 1,
    screenTitle: 'عمليـــــة جديــــدة',
    screenName: 'FirstStepScr',
    screenId: '101',
    initState: false,
  },
  {
    id: 2,
    screenTitle: 'تقاريـــــــــر',
    screenName: 'Reports',
    screenId: '102',
    initState: false,
  },
  {
    id: 3,
    screenTitle: 'بحـــــــــث',
    screenName: 'Search',
    screenId: '103',
    initState: false,
  },
  {
    id: 4,
    screenTitle: 'تغيير حد السحــــــب',
    screenName: 'LimitUpdate',
    screenId: '104',
    initState: false,
  },
  {
    id: 5,
    screenTitle: 'أضافة رقم جديــــــد',
    screenName: 'AddNewNumber',
    screenId: '105',
    initState: true,
  },
  {
    id: 6,
    screenTitle: 'إعدادات',
    screenName: 'Settings',
    screenId: '106',
    initState: true,
  },
  {
    id: 7,
    screenTitle: 'كل العمليات',
    screenName: 'AllPayments',
    screenId: '107',
    initState: false,
  },
  {
    id: 8,
    screenTitle: 'حدف رقـــم',
    screenName: 'DeleteNo',
    screenId: '108',
    initState: false,
  },
];

const dailyStats = {
  processes: 0,
  revenue: 0,
  cost: 0,
};

export {
  defineUUID,
  getUserNumbers,
  getFreqUsedNo,
  getPaymentProcessesData,
  getActiveNumber,
  saveActiveNumber,
  setUserNumbers,
  phoneNumberObj,
  freqUsedNoObj,
  PaymentProcess,
  homeScreenIcons,
};
