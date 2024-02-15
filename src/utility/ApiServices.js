let baseUrl = "http://localhost:2023/api/";

export const createUser = async (body) => {
  let token = localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`${baseUrl}user/reg`, requestOptions);
  if (!response.ok) {
    let data = await response.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

export const StudentLogin = async (body) => {
  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`${baseUrl}user/login`, requestOptions);
  if (!response.ok) {
    let data = await response.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

export const createQues = async (body) => {
  let token = localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`${baseUrl}assign/createassign`, requestOptions);
  if (!response.ok) {
    let data = await response.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

export const getAllAssignments = async () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(`${baseUrl}assign/getallassign`, requestOptions);
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

export const getAllUsers = async () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(`${baseUrl}user/getalluser`, requestOptions);
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};
export const getStudentAssignById = async (id) => {
  let token = localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  };
  let res = await fetch(
    `${baseUrl}stdassign/stdviewsingleassign/${id}`,
    requestOptions
  );
  if (!res.ok) {
    let data = await res.json();
    return { data: data, ok: false };
  }
  let data = await res?.json();
  return { data: data, ok: true };
};
export const viewAllstudentAssignments = async () => {
  let token = localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", token: token },
  };
  const response = await fetch(
    `${baseUrl}stdassign/stdviewallassign`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};




export const AttenAnswer = async (id, body) => {
  console.log(id);
  let token = localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(
    `${baseUrl}stdassign/attendassign/${id}`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data.data, ok: true };
};

export const getUserProfile = async () => {
  let token = localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
       token: token,
    },
  };
  const response = await fetch(`${baseUrl}user/profile`, requestOptions);
  if (!response.ok) {
    let data = await response.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};
export const AlldownloadPdf = async () => {
  let token = localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": 'application/pdf',
      token: token,
    },
    responseType: "blob",    
  };

  try {
    const response = await fetch(`${baseUrl}assign/get`, requestOptions);
    if (!response.ok) {
      throw new Error('Failed to download PDF');
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'file.pdf';
    link.click();
    return { success: true, blob, error: null };
  } catch (error) {
    console.log(error);
    return { success: false, blob: null, error: error.message };
  }
};
export const subjectdownloadPdf = async (subject) => {
  let token = localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": 'application/pdf',
      token: token,
    },
    responseType: "blob",    
  };

  try {
    const response = await fetch(`${baseUrl}assign/get?subject=${subject}`, requestOptions);
    if (!response.ok) {
      throw new Error('Failed to download PDF');
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'subject.pdf';
    link.click();
    return { success: true, blob, error: null };
  } catch (error) {
    console.log(error);
    return { success: false, blob: null, error: error.message };
  }
};

export const classdownloadPdf = async (classes) => {
  let token = localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": 'application/pdf',
      token: token,
    },
    responseType: "blob",    
  };

  try {
    const response = await fetch(`${baseUrl}assign/get?classes=${classes}`, requestOptions);
    if (!response.ok) {
      throw new Error('Failed to download PDF');
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'class.pdf';
    link.click();
    return { success: true, blob, error: null };
  } catch (error) {
    console.log(error);
    return { success: false, blob: null, error: error.message };
  }
};

export const assigndatadownloadPdf = async (assignmentid) => {
  let token = localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": 'application/pdf',
      token: token,
    },
    responseType: "blob",    
  };

  try {
    const response = await fetch(`${baseUrl}assign/get?assignmentid=${assignmentid}`, requestOptions);
    if (!response.ok) {
      throw new Error('Failed to download PDF');
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Assignment.pdf';
    link.click();
    return { success: true, blob, error: null };
  } catch (error) {
    console.log(error);
    return { success: false, blob: null, error: error.message };
  }
};

export const studentdatadownloadPdf = async (stdid) => {
  let token = localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": 'application/pdf',
      token: token,
    },
    responseType: "blob",    
  };

  try {
    const response = await fetch(`${baseUrl}assign/get?stdid=${stdid}`, requestOptions);
    if (!response.ok) {
      throw new Error('Failed to download PDF');
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'singleStudent.pdf';
    link.click();
    return { success: true, blob, error: null };
  } catch (error) {
    console.log(error);
    return { success: false, blob: null, error: error.message };
  }
};