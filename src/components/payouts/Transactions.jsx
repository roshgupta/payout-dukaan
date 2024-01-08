import styled from "styled-components";

const Transactions = () => {
  return (
    <StyledTransaction>
      <div className="transaction-header">
        <h4>
          Transactions | <span>This Month</span>
        </h4>
        <div className="buttons">
          <div className="pills">
            Payouts (<span>22</span>)
          </div>
          <div className="pills">
            Refunds (<span>6</span>)
          </div>
        </div>
      </div>
      <div className="transaction-body">
        <div className="transaction-head">
          <input type="text" />
          <div className="buttons">Sort</div>
          <div className="buttons">Download</div>
        </div>
        <table className="transaction-container">
          <thead>
            <th>Order ID</th>
            <th>Status</th>
            <th>Transaction ID</th>
            <th>Refund date</th>
            <th>Order amount</th>
          </thead>
          <tbody>
            <tr>
              <a href="#">
                #<span>281209</span>
              </a>
            </tr>
            <tr>
              <div>
                <span></span>Successful
              </div>
            </tr>
            <tr>131634495747</tr>
            <tr>Today, 08:45 PM</tr>
            <tr>
              &#8377;<span>1,125.00</span>
            </tr>
          </tbody>
        </table>
      </div>
    </StyledTransaction>
  );
};

const StyledTransaction = styled.div`
  width: 100%;
  height: auto;
`;
export default Transactions;
