import styled from "styled-components";
import { ReactSVG } from "react-svg";

const Transactions = () => {
  return (
    <StyledTransaction>
      <div className="transaction-header">
        <h4>
          Transactions | <span>This Month</span>
        </h4>
        <div className="buttons">
          <div className="pills payout">
            Payouts (<span>22</span>)
          </div>
          <div className="pills refunds">
            Refunds (<span>6</span>)
          </div>
        </div>
      </div>
      <div className="transaction-body">
        <div className="transaction-head">
          <div className="search-div">
            <input
              className="thead-search"
              type="text"
              placeholder="Oder ID or transaction ID"
            />
            <ReactSVG
              src="/icons/search-transaction.svg"
              className=" svg search"
            />
          </div>
          <div className="buttons">
            Sort <ReactSVG src="/icons/sort.svg" className=" svg sort" />
          </div>
          <div className="buttons">
            <ReactSVG src="/icons/download.svg" className="svg" />
          </div>
        </div>
        <TransactionTableContainer>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Status</th>
              <th>Transaction ID</th>
              <th>Refund date</th>
              <th className="amount">Order amount</th>
            </tr>
          </thead>
          <tbody>
            <TableRow
              orderID={281209}
              status="Successful"
              transactionID={131634495747}
              refundDate="Today, 08:45 PM"
              OrderAmount="1,125.00"
            />
            <TableRow
              orderID={281208}
              status="Processing"
              transactionID={131634495747}
              refundDate="Yesterday, 03:00 PM"
              OrderAmount="1,125.00"
            />
            <TableRow
              orderID={281207}
              status="Successful"
              transactionID={131634495747}
              refundDate="12 Jul 2023, 03:00 PM"
              OrderAmount="1,125.00"
            />
            <TableRow
              orderID={281206}
              status="Successful"
              transactionID={131634495747}
              refundDate="12 Jul 2023, 03:00 PM"
              OrderAmount="1,125.00"
            />
            <TableRow
              orderID={281205}
              status="Successful"
              transactionID={131634495747}
              refundDate="12 Jul 2023, 03:00 PM"
              OrderAmount="1,125.00"
            />
            <TableRow
              orderID={281204}
              status="Successful"
              transactionID={131634495747}
              refundDate="12 Jul 2023, 03:00 PM"
              OrderAmount="1,125.00"
            />
            <TableRow
              orderID={281204}
              status="Successful"
              transactionID={131634495747}
              refundDate="12 Jul 2023, 03:00 PM"
              OrderAmount="1,125.00"
            />
            <TableRow
              orderID={281204}
              status="Successful"
              transactionID={131634495747}
              refundDate="12 Jul 2023, 03:00 PM"
              OrderAmount="1,125.00"
            />
          </tbody>
        </TransactionTableContainer>
      </div>
    </StyledTransaction>
  );
};

const TableRow = ({
  orderID,
  status,
  transactionID,
  refundDate,
  OrderAmount,
}) => {
  return (
    <StyledTableRow status={status}>
      <td>
        <a className="orderId-link" href="#">
          #<span>{orderID}</span>
        </a>
      </td>
      <td className="status-td">
        <span className="status"></span>
        {status}
      </td>
      <td>{transactionID}</td>
      <td>{refundDate}</td>
      <td className="amount">
        &#8377;<span>{OrderAmount}</span>
      </td>
    </StyledTableRow>
  );
};
const StyledTableRow = styled.tr`
  width: 100%;
  height: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  padding: 10px 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  border-bottom: 1px solid #e6e6e6;
  td {
    flex-grow: 1;
    text-align: start;
  }
  td.amount {
    text-align: end;
  }

  .status-td {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .orderId-link {
    color: #146eb4;
  }
  .status {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 6px;
    background-color: ${({ status }) =>
      status === "Successful" ? "#17B31B" : "#999999"};
  }
`;

const TransactionTableContainer = styled.table`
  width: 100%;
  display: flex;
  height: 36vh;
  overflow-y: scroll;
  flex-direction: column;
  thead {
    background-color: #f2f2f2;
    color: #4d4d4d;
    width: 100%;
    border-radius: 4px;
    tr {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      align-items: center;
      padding: 10px 12px;
      font-size: 14px;
      font-weight: 400;
      border-bottom: 1px solid #e6e6e6;
      line-height: 20px;
      th {
        flex-grow: 1;
        text-align: start;
      }
      th.amount {
        text-align: end;
      }
    }
  }
`;

const StyledTransaction = styled.div`
  width: 100%;
  height: auto;
  .transaction-header {
    margin-bottom: 24px;
    h4 {
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      margin-bottom: 32px;
    }
    .buttons {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 12px;
      .pills {
        padding: 6px 16px;
        border-radius: 16px;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      }
      .payout {
        background-color: #e6e6e6;
        color: #808080;
      }
      .refunds {
        background-color: #146eb4;
        color: white;
      }
    }
  }
  .transaction-body {
    width: 100%;
    padding: 12px;
    .transaction-head {
      margin-bottom: 12px;
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 16px;
      .search-div {
        position: relative;
        margin-right: auto;
        .search {
          position: absolute;
          top: 12px;
          left: 16px;
        }
        .thead-search {
          border-radius: 4px;
          max-width: 248px;
          width: 100%;
          height: 40px;
          border: 1px solid #d9d9d9;
          outline: none;
          padding: 10px 16px 10px 38px;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        }
      }
      .buttons {
        border-radius: 4px;
        padding: 6px 12px;
        border: 1px solid #d9d9d9;
        color: #4d4d4d;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 36px;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        .sort {
          height: 16px;
          width: 16px;
          margin-left: 6px;
        }
      }
    }
  }
`;
export default Transactions;
