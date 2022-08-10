import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// 선거 생성
async function createVote({ token, name, description, isAvailable }) {
  const options = {
    method: 'POST',
    url: API_URL + '/v1/admin/elections',
    data: {
      name: name,
      description: description,
      registerTime: null,
      isAvailable: isAvailable,
    },
    headers: {
      Authorization: token,
    },
  };
  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
// 선거 삭제
async function deleteVote({ electionId, token }) {
  const options = {
    method: 'DELETE',
    url: API_URL + '/v1/admin/elections/' + electionId,

    headers: {
      Authorization: token,
    },
  };
  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

// // 선거 오픈
async function openVote({ electionId, token }) {
  const options = {
    method: 'PATCH',
    url: API_URL + '/v1/admin/elections/' + electionId + '/open',
    data: {
      electionId,
    },
    headers: {
      Authorization: token,
    },
  };
  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

// // 선거 종료
async function closeVote({ electionId, token }) {
  const options = {
    method: 'PATCH',
    url: API_URL + '/v1/admin/elections/' + electionId + '/close',
    data: {
      electionId,
    },
    headers: {
      Authorization: token,
    },
  };
  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

// 선거 목록 보기
async function getVostList({ token, page, size }) {
  const options = {
    method: 'GET',
    url: API_URL + '/v1/elections',
    params: { page: page, size: size },
    headers: {
      Authorization: token,
    },
  };
  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export default {
  createVote,
  deleteVote,
  openVote,
  closeVote,
  getVostList,
};
