const adminOrders = async (token) => {
  var myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  const response = await fetch(
    'https://alpha.ricnoslogistics.com/api/admin/order/orders',
    requestOptions
  );

  const result = await response.json();

  return result.data.orders;
};

const staffOrders = async (token) => {
  var myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  const incomingResponse = await fetch(
    'https://alpha.ricnoslogistics.com/api/admin/order/incomingOrders',
    requestOptions
  );

  const outgoingResponse = await fetch(
    'https://alpha.ricnoslogistics.com/api/admin/order/branchOrders',
    requestOptions
  );

  const incomingResult = await incomingResponse.json();

  const outgoingResult = await outgoingResponse.json();

  return [...incomingResult.data.orders, ...outgoingResult.data.orders];
};

export { adminOrders, staffOrders };
