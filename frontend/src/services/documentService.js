import axios from 'axios';

const API_URL = 'http://localhost:5000/api/documents';
const user = JSON.parse(localStorage.getItem('user'));

const token = user ? user.token : null;
export const getDocuments = async () => {
    const { data } = await axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

export const getDocumentById = async (id) => {
    const { data } = await axios.get(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};


export const updateDocument = async (id, documentData) => {
    const { data } = await axios.put(`${API_URL}/${id}`, documentData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};


export const deleteDocument = async (id) => {
    const { data } = await axios.delete(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};