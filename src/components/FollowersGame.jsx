
import React from 'react';
import PropTypes from 'prop-types';
import "./FollowersGame.scss"
export const FollowersGame = ({ image, Game, aboutGame}) => {
    return (
        <div>
            <div className='block_game'>
                <img className='block_game_img' src={image} alt="img_game" />
                <div className='block_game_about'>
                    <p  className='block_game_about_text'>{aboutGame}</p>
                    <div className='block_game_about_box'>
                    <button className='block_game_about_box_button'>Watch now</button>
                    </div>
                </div>
            </div>
            <div className='info'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <g clipPath="url(#clip0_1_272)">
                        <path d="M21.8216 14.6372C21.5352 10.9087 19.7993 8.57221 18.2678 6.5104C16.8498 4.60161 15.625 2.95327 15.625 0.521725C15.625 0.326413 15.5156 0.147897 15.3422 0.0583953C15.1682 -0.0316437 14.9592 -0.0168976 14.801 0.0980438C12.501 1.74384 10.582 4.51772 9.91162 7.1644C9.44624 9.00703 9.38467 11.0785 9.37603 12.4466C7.252 11.993 6.77085 8.81582 6.76577 8.7812C6.74185 8.6164 6.64116 8.47299 6.49468 8.39468C6.34668 8.31738 6.17271 8.31176 6.02266 8.38603C5.91128 8.43994 3.28877 9.77246 3.13618 15.0928C3.12549 15.2698 3.125 15.4474 3.125 15.6249C3.125 20.7936 7.33081 24.9992 12.5 24.9992C12.5071 24.9997 12.5147 25.0007 12.5208 24.9992C12.5229 24.9992 12.5249 24.9992 12.5274 24.9992C17.6839 24.9844 21.875 20.7845 21.875 15.6249C21.875 15.3649 21.8216 14.6372 21.8216 14.6372ZM12.5 23.9576C10.7768 23.9576 9.375 22.4644 9.375 20.6289C9.375 20.5664 9.37451 20.5033 9.37905 20.426C9.3999 19.6519 9.54692 19.1235 9.70815 18.772C10.0103 19.421 10.5504 20.0176 11.4278 20.0176C11.7157 20.0176 11.9487 19.7846 11.9487 19.4968C11.9487 18.7553 11.964 17.8998 12.1486 17.1277C12.3129 16.4432 12.7055 15.7148 13.203 15.131C13.4242 15.8888 13.8556 16.5021 14.2767 17.1008C14.8794 17.9572 15.5025 18.8427 15.6119 20.3527C15.6185 20.4422 15.6251 20.5323 15.6251 20.6289C15.625 22.4644 14.2232 23.9576 12.5 23.9576Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1_272">
                            <rect width="25" height="25" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <p className='info_games'>{Game}</p>
            </div>
        </div>
    );
    
};

FollowersGame.propTypes = {
    image: PropTypes.string.isRequired,
    Game: PropTypes.string.isRequired,
    aboutGame: PropTypes.string.isRequired,
};


export default FollowersGame;


