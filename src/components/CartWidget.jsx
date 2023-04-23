function CartWidget ({cant}){
    return(
        <div>🛒
            {cant!=0 && <span> ({cant})</span>}
        </div>
    );
}

export default CartWidget;