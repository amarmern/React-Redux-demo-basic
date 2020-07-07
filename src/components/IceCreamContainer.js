import React from 'react';
import { buyIceCream } from '../redux/index';
import { connect } from 'react-redux';

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Number of IceCream - {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy a IceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.noOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
