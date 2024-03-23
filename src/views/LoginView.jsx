import InputFieldView from "./InputFieldView";
import { inputs } from "../constants";

const LoginView = ({ formik }) => {
  return (
    <div className="login-page">
      <div className="container-sm my-5 px-5" style={{ maxWidth: "700px" }}>
        <h2 className="d-flex gap-3 justify-content-center align-items-center">
          <img height={60} width={60} src="/c-logo.png" alt="" />
          <span>Coinmania</span>
        </h2>

        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-3 mt-5"
        >
          {inputs.map((data) => (
            <InputFieldView key={data.name} formik={formik} data={data} />
          ))}

          <button className="btn btn-primary" type="submit">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
