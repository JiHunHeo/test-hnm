import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ authenticate, setAuthenticate }) => {
    const menuList = ['여성', 'Divided', '남성', '신생아 / 유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    };
    const search = (event) => {
        if (event.key === 'Enter') {
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`);
        }
    };
    return (
        <div>
            <div className="nav-header">
                {authenticate ? (
                    <div className="login-button" onClick={() => setAuthenticate(false)}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그아웃</div>
                    </div>
                ) : (
                    <div className="login-button" onClick={goToLogin}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그인</div>
                    </div>
                )}
            </div>
            <div className="nav-section">
                <Link className="nav-logo" to="/">
                    <img src="https://brandslogo.net/wp-content/uploads/2014/10/h-m-logo.png" />
                </Link>
            </div>
            <div className="nav-menu-area">
                <div className="menu-area">
                    <ul className="menu-list">
                        {menuList.map((menu) => (
                            <li>{menu}</li>
                        ))}
                    </ul>
                </div>
                <div className="search-box">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" placeholder="제품검색" onKeyPress={(event) => search(event)} />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
