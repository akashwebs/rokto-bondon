import React from 'react';

const BestBloodDonner = () => {
    return (
        <div className='md:px-16 px-3'>
            <div className='my-8'>
                <div class="text-center divider">
                    <h3 class="animate-charcter text-3xl"> দূর্দান্ত রক্ত সৈনিকগন</h3>
                </div>
            </div>

            <div>

                <div class="container">
                    <div class="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4">
                        <div class="">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://picsum.photos/130/130?image=1027" />
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Michele Miller</h3>
                                    <h4 class="title">Web Developer</h4>
                                </div>
                                <ul class="profile-footer">
                                   <h2>বন্ধন রক্তদান</h2>
                                </ul>
                            </div>
                        </div>
                        
                       
                    </div>
                </div>

            </div>

        </div>
    );
};

export default BestBloodDonner;