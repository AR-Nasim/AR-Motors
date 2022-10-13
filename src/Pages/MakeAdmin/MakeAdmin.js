import React,{useState} from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://morning-atoll-56415.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                    alert("Admin created successfully");
                }
                else{
                    alert("This is not an user");
                }
            })

        e.preventDefault()
    }

    return (
        <div className="row d-flex justify-content-center">
            <div className="col-lg-7">
                <div className="form-floating mb-3 shadow-sm">
                    <input onBlur={handleOnBlur} type="text" className="form-control" id="floatingEmail" placeholder="Email" />
                    <label htmlFor="floatingName">Email Address</label>
                </div>
                <button onClick={handleAdminSubmit} className="btn-custom">Make Admin</button>
            </div>
        </div>
    );
};

export default MakeAdmin;