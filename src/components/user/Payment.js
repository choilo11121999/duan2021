const Payment = ({ urlPay }) => {
  return (
    <div className="container my-4">
      <iframe src={urlPay} width={900} height={900}></iframe>
    </div>
  );
}

export default Payment;