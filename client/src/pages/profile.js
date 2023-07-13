import React from 'react';
import {QUERY_ME} from '../utils/queries'
import { useQuery } from '@apollo/client';



const UserProfile =() =>{
    const userId = localStorage.getItem('useId');
    console.log(userId)

    const { loading, data } = useQuery(QUERY_ME, {
        variables: { userId: userId },
      });

   
      if (loading) {
        // Handle loading state
        return <div>Loading...</div>;
      }
      
      console.log(data)
      const user = data?.me;
      const reservations = user?.reservations || [];


       
        
      
    
    console.log("reservation",reservations)
    
     return (
        
            <main className="container mt-5">
              <h1 className="mb-4 text-white">Reservations</h1>
              <div className="row">
                {reservations.map((reservation, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="card mb-3">
                      <div className="card-header" style={{ backgroundColor: "#F79C59" }}>
                        <h2 className="card-title">
                        Reservation Time: {reservation.reservationTime}
                        </h2>
                      </div>
                      <div className="card-body text-dark">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Name: {reservation.usernameR}</li>
                          <li className="list-group-item">Group Size: {reservation.groupSize}</li>
                          <li className="list-group-item">Phone Number: {reservation.phoneNumber}</li>
                          <li className="list-group-item">Comments: {reservation.comments}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          )
        
                }

export default UserProfile