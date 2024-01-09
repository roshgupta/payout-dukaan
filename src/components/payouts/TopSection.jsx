import styled from "styled-components";
import { ReactSVG } from "react-svg";

const TopSection = () => {
  return (
    <StyledTopSection>
      <div className="top-bar">
        <h3>Overview</h3>
        <select name="month" id="month">
          <option value="this-month">This Month</option>
          <option value="prev-month">Prev Month</option>
        </select>
      </div>
      <CardContainer>
        <div className="cards next-payout">
          <div className="card-content">
            <div className="top">
              <p>Next Payout</p>
              <ReactSVG className="svg" src="/icons/ques-white.svg" />
            </div>
            <div className="mid">
              <p>
                &#8377;<span>2,312.23</span>
              </p>
              <div className="quant">
                <p>
                  <span>23</span> orders
                </p>
                <ReactSVG className="svg" src="/icons/right-arrow.svg" />
              </div>
            </div>
          </div>
          <div className="card-footer">
            <p>Next payout date:</p>
            <p>
              Today, <span>04:00PM</span>
            </p>
          </div>
        </div>
        <div className="cards pending">
          <div className="card-content">
            <div className="top">
              <p>Amount Pending</p>
              <ReactSVG className="svg" src="/icons/ques.svg" />
            </div>
            <div className="mid">
              <p>
                &#8377;<span>92,312.20</span>
              </p>
              <div className="quant">
                <p>
                  <span>13</span> orders
                </p>
                <ReactSVG className="svg" src="/icons/right-arrow-blue.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="cards ">
          <div className="card-content">
            <div className="top">
              <p>Amount Processed</p>
              <ReactSVG className="svg" src="/icons/ques.svg" />
            </div>
            <div className="mid">
              <p>
                &#8377;<span>23,92,312.19</span>
              </p>
            </div>
          </div>
        </div>
      </CardContainer>
    </StyledTopSection>
  );
};

const StyledTopSection = styled.div`
  width: 100%;

  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    height: 36px;
    h3 {
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      color: #1a181e;
    }
    #month {
      color: #4d4d4d;
      outline: none;
      border: 1px solid #d9d9d9;
      font-size: 16px;
      padding: 6px 14px;
      background-color: white;
      border-radius: 4px;
    }
  }
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 32px;
  @media only screen and (max-width: 675px) {
    flex-direction: column;
  }
  .cards {
    flex-grow: 1;
    border-radius: 8px;
    width: 100%;
    height: 118px;
    box-shadow: 0px 2px 6px 0px rgba(26, 24, 30, 0.04);

    .card-content {
      padding: 20px 24px;
      width: 100%;

      .top {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }
        .svg {
          margin-left: 8px;
        }
      }
      .mid {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 32px;
        font-weight: 500;
        line-height: 38px;

        .quant {
          display: flex;
          align-items: center;
          font-size: 16px;
          font-weight: 500;

          p {
            text-decoration: underline;
            line-height: 24px;
          }
        }
      }
    }
  }
  .pending {
    .card-content {
      .mid {
        .quant {
          color: #146eb4;
        }
      }
    }
  }
  .next-payout {
    background-color: #146eb4;
    height: 154px;
    color: white;
    .card-footer {
      width: 100%;
      height: 36px;
      background-color: #0e4f82;
      color: #f2f2f2;
      border-radius: 8px;
      padding: 8px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
    }
  }
`;

export default TopSection;
