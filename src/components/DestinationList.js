// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import destinations from './destinations1';

 
const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
 
const ListItem = styled.li`
  margin-bottom: 20px;
  
  text-align: center;
`;
 
const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;
 
const Button = styled.button`
  background: #3498db;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`;
 
const DestinationList = () => {
   
   
    return (
        <div style={
            {
                backgroundColor: "#c8e2fa",
                padding: "2%"
            }
        }>
            <List>
                {destinations.map((destination) => (
                    <ListItem key={destination.id}>
                        <Link to={`/destination/${destination.id}`}
                            style={
                                {
                                    textDecoration: 'none',
                                    color: '#333'
                                }}>
                            <Image src={destination.image}
                                alt={destination.name} />
                            <h3>{destination.name}</h3>
                            <h5>{destination.bestTime}</h5>
                            <h6>{destination.rating}</h6>
                        </Link>
                       <a href={destination.linkk}><Button className='hover:scale-105'>
                            {
                                
                                    'Visit'
                            }
                        </Button></a> 
                    </ListItem>
                ))}
            </List>
        </div>
    );
};
export default DestinationList;