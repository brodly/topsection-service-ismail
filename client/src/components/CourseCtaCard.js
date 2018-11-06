import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

const CourseCtaCard = (props) => {

  const courseData = props.courseData || {};
  const { isOnDiscount, oldPrice, discountPercent } = courseData;

  const renderOldPrice = () => {
    if(isOnDiscount) {
      return (<span style={styles.oldPriceStyle}> ${oldPrice} </span>);
    }
    return null;
  };
const renderPrecentage = () => {
    if(isOnDiscount) {
      return(<span style={styles.discountStyle}> {discountPercent} </span>)
    }
    return null;
  };
return (
    <Card style={styles.cardStyle}>
      <Image style={styles.thumbnailStyle} src='https://udemy-images.udemy.com/course/480x270/1091520_9b90_7.jpg' />
      <Card.Content style={styles.cardBodyStyle}>
        <Card.Header style={styles.priceContainerStyle} >
          <span style={styles.priceStyle}> {'$12.99'} </span>
          {renderOldPrice()}
          {renderPrecentage()}
        </Card.Header>
        <Card.Meta style={styles.countDownContainerStyle}>
          <span className='date' style={styles.countDownTextStyle}>
            <strong>{'2 Days'}</strong> {'left on this price'}
          </span>
        </Card.Meta>
        <div style={styles.btnContainerStyle} >
          <Button style={styles.cartBtnStyle}> {'Add To Cart'} </Button>
          <Button basic style={styles.buyNowBtnStyle}> {'Buy Now'} </Button>
        </div>
        <Card.Description style={styles.moneyBackStyle}>{'30-Day Money-Back Guarantee'}</Card.Description>
        <Card.Description style={{ fontWeight: 700, color: '#505763', fontSize: '15px'}}>
          {'Includes'}
        </Card.Description>
        <Card.Description>
          <ul style={{ paddingLeft: 22, marginTop: '10px' }}>
            <li> {'20.5 hours on-demand video'} </li>
            <li> {'26 articles'} </li>
            <li> {'Full lifetime access'} </li>
            <li> {'Certificate of Completion'} </li>
          </ul>
        </Card.Description>
        <Card.Description style={{ fontWeight: 700, color: '#505763', fontSize: '15px'}}>
          {'Interactive Features'}
        </Card.Description>
        <Card.Description style={{ paddingTop: '10px'}}>
          {'193 downloadable resources'}
        </Card.Description>
        <Card.Description style={{ paddingTop: '10px'}}>
          <p style={{ textAlign: 'center', cursor: 'pointer', color: '#007791', paddingTop: '15px', paddingBottom: '15px', fontSize: 15, fontWeight: 400 }}>
            {'Have a coupon?'}
          </p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          <p style={{ textAlign: 'center', cursor: 'pointer', color: '#007791', paddingTop: '15px', paddingBottom: '15px', fontSize: 15, fontWeight: 400 }}>
            {'Share'}
          </p>
      </Card.Content>
    </Card>
  );
};

const styles = {
  cardStyle: {
    paddingTop: '4px',
    paddingLeft: '4px',
    paddingRight: '4px',
    width: '29%',
    position: 'absolute'
  },
  thumbnailStyle: {
    height: '200px'
  },
  cardBodyStyle: {
    paddingTop: '4%',
    paddingLeft: '9%',
    paddingRight: '5%'
  },
  priceContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '20px'
  },
  priceStyle: {
    fontSize: '36px',
    fontWeight: 700,
    color: '#505763',
    fontFamily: 'Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif'
  },
  discountStyle: {
    fontWeight: 400,
    fontSize: '18px',
    color: '#a1a7b3',
    marginLeft: '10px',
  },
  oldPriceStyle: {
    fontWeight: 400,
    fontSize: '18px',
    color: '#a1a7b3',
    marginLeft: '10px',
    textDecoration: 'line-through'
  },
  countDownTextStyle: {
    color: '#992337',
    fontSize: '14px',
  },
  countDownContainerStyle: {
    marginTop: '10px'
  },
  btnContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
    justifyContent: 'space-between',
    height: '120px',
    marginTop: '10px'
  },
  cartBtnStyle: {
    display: 'block',
    borderRadius: '2px',
    height: '45%',
    backgroundColor:"#ec5252",
    color: '#fff'
  },
  buyNowBtnStyle: {
    display: 'block',
    borderRadius: '2px',
    height: '45%',
    fontSize: '15px',
    lineHeight: 1.35,
    fontWeight: 700
  },
  moneyBackStyle: {
    textAlign: 'center',
    display: 'block',
    fontSize: '12px',
    fontWeight: 400,
    marginBottom: '10px',
    marginTop: '10px',
    textAlign: 'center',
  }
};

export default CourseCtaCard;
