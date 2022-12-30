import InvestmentItem from "./InvestmentItem";

const InvestmentItemList = ({investmentlist}) => { // investmentlist : 받아온 투자상품 데이터
    return (
        <div className="investment-wrap">
            <div className="cate-wrap"></div>
            <div className="investment-list">
                <h2>투자 상품 리스트</h2>
                {
                    investmentlist.map((item)=>(
                        <InvestmentItem item={item}/>
                    ))
                }
            </div>
        </div>
    )
};

export default InvestmentItemList;