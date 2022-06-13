import { Form, Field } from "react-final-form";
import { useAppContext } from "../context/AppContext";

const CartForm = () => {
  const { onCart, cartTotal } = useAppContext();

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    await sleep(300);
    window.alert(
      `Gracias por tu compra ${values.fullname}! La enviamos al mail ${values.email}. El total es de: $${cartTotal}`
    );
  };
  return (
    <div className="flex justify-center align-center flex-col">
      <div className="flex justify-center align-center flex-wrap">
        {onCart.map((item, key) => (
          <div
            key={key}
            className="card w-96 bg-base-100 shadow-xl m-2 max-w-[200px] image-full"
          >
            <figure>
              <img className="opacity-50" src={item.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <hr className="border-secondary" />
              <p>{item.author}</p>
              <p>{"$" + item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.fullname) {
            errors.username = "Completar campo";
          }
          if (!values.email) {
            errors.email = "Completar campo";
          }
          if (!values.confirm) {
            errors.confirm = "Completar campo";
          } else if (values.confirm !== values.email) {
            errors.confirm = "Mail incorrecto";
          }
          return errors;
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <div className="flex justify-center my-3">
            <form
              className="form-control w-full max-w-xs"
              onSubmit={handleSubmit}
            >
              <Field name="fullname">
                {({ input, meta }) => (
                  <div className="my-2">
                    <label className="input-group input-group-vertical">
                      <span>Nombre y Apellido</span>
                      <input
                        className="input input-bordered w-full max-w-xs"
                        {...input}
                        type="text"
                        placeholder="Tony Tony Chopper"
                      />
                    </label>
                    {meta.error && meta.touched && (
                      <span className="text-error">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
              <Field name="email">
                {({ input, meta }) => (
                  <div className="my-2">
                    <label className="input-group input-group-vertical">
                      <span>E-Mail</span>
                      <input
                        className="input input-bordered w-full max-w-xs"
                        {...input}
                        type="email"
                        placeholder="chopper_the_deer@mugiwara.com"
                      />
                    </label>
                    {meta.error && meta.touched && (
                      <span className="text-error">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
              <Field name="confirm">
                {({ input, meta }) => (
                  <div className="my-2">
                    <label className="input-group input-group-vertical">
                      <span>Confirmar E-Mail</span>
                      <input
                        className="input input-bordered w-full max-w-xs"
                        {...input}
                        type="email"
                        placeholder="chopper_the_deer@mugiwara.com"
                      />
                    </label>
                    {meta.error && meta.touched && (
                      <span className="text-error">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
              <div className="buttons">
                <button
                  className="btn btn-sm btn-primary"
                  type="submit"
                  disabled={submitting}
                >
                  Submit
                </button>
                <button
                  className="btn btn-sm btn-warning"
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        )}
      />
    </div>
  );
};

export default CartForm;