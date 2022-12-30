const InvestmentItem = ({item}) => {
    return (<div class="container m-auto grid grid-cols-3 gap-4">
        {item.name}
    </div>);
};

export default InvestmentItem;