import "./Login.css";

export default function LoginFunction() {
  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="parent">
          <h3>Login</h3>
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button value="Submit"> Login </button>
        </div>
      </form>
    </>
  );
}
