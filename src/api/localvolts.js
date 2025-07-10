import axios from 'axios';

// 🔐 Credentials (from API Guide - use your own if given)
const API_KEY = '05eb3badd072de87926216b6ef83071f';
const PARTNER_ID = '7863';

// 🌐 Base API endpoint and version
const axiosInstance = axios.create({
  baseURL: '/api', // Proxies to https://api.localvolts.com/v1
  headers: {
    Authorization: `apikey ${API_KEY}`,
    partner: PARTNER_ID,
    'Content-Type': 'application/json',
  },
});



/**
 * Fetches the most recent 5-minute energy interval data.
 * Defaults to all NMIs you're authorized to access.
 */
export const fetchCurrentInterval = async () => {
  try {
    const response = await axiosInstance.get('/customer/interval', {
      params: { NMI: '*' },
    });
    console.log('📦 API response object:', response.data);
    console.log('🧪 First interval:', response.data[0]);

    console.log('✅ Raw API Response:', response.data); // 👈 Add this
    return response.data;
  } catch (error) {
    console.error('❌ API fetch error:', error.message);
    return null;
  }
};
