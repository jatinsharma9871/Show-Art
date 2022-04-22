import { Link } from 'react-router-dom'
import './login.css'

export const Login = () =>{
    const user = JSON.parse(localStorage.getItem('user'));
    const removeLocalSorage = () =>{
        localStorage.setItem('user',JSON.stringify('lock'))
    }
    return (
        <div className="sign">
            <div className='signpage'>
            {/* <Link to={'/email'}><button>Sign in</button></Link> */}
               {user==='lock'?<Link to={'/email'}><button>Sign in</button></Link>:<>
                  <div className='loginIcons'>
                    <div>
                        <img width={'45px'} height={'45px'} style={{borderRadius:'50%', margin:'20px 0px'}} src="https://d1w2poirtb3as9.cloudfront.net/default.jpeg?Expires=1649026627&Signature=B-rHzht352brIZyVMi4TPGncvtFkDLSz~oJj7I-f96Guqzmj-HPZZmj8jOqzCxDL~Ya59hpr8Q7EsLfJVGAHknQ2DSVRDaC4HY0g3wuiysJo7YKlR98FbdxvvucjvjHxtZNi7OthUn3TPhqNkRtt6RzDdklIe62-yksA0mX9h4Y9XMn2wZ~ED~~-hwdBveOxktY7nyrfyeAEUrdqfW~29nyyMjqszZz0rIu6nCS4YIGj8tzeYnetqu3vUMeykIcic3xS4PiCsTfIIsQCQjK0BR67VMWokdIyZ0R2kSEffGJuFXv0hKYsET~p~TVtLWE6aKlCbNkeOGu1zR4tCuMAKA__&Key-Pair-Id=APKAJSDH2OZQQSA64LQQ" alt="" />
                        <div  style={{fontSize:'16px', fontWeight:'500',lineHeight:'24px',marginTop:'30px'}}>{user.user.firstName}</div>
                    </div>
                    <div>
                        <div><svg width={'20px'}  aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c9 ca cb cc"><path d="M17 3c-2.2 0-3.8 1.2-5 2.5C10.8 4.3 9.2 3 7 3 3.5 3 1 5.9 1 9.5c0 1.8.7 3.4 2 4.5l9 8.5 9-8.5c1.2-1.2 2-2.7 2-4.5C23 5.9 20.5 3 17 3z" ></path></svg></div>
                        <div>Wish List</div>
                    </div>

                  </div>
                  <div onClick={removeLocalSorage}>sign Out</div>
               </>}
            </div>
        </div>
    )
}