// import { useCustomNavigate } from "../../../utilities/constants";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Button from "../../../commons/Button/Button";
import Modal from "../../../commons/Modal/Modal";
import { AppStore } from "../../../redux/store";
import Layout from "../Layout/Layout";
import "./Privacy.scss";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  accountType: Yup.string().required("Required"),
  cel: Yup.number().required("Required"),
  ciudad: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
});

function Privacy() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);

  const userState = useSelector((store: AppStore) => store.user);
  const toggle = () => {
    setDisabled(false);
  };

  const handleUpdate = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const submitForm = () => {
    setShowModal(false);
    setDisabled(true);
  };

  return (
    <Layout>
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          accountType: "",
          cel: "",
          ciudad: "",
          email: "",
        }}
        validationSchema={FormSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form id="privacy">
            <span>
              Nombres:{" "}
              {disabled ? (
                <>{userState.name}</>
              ) : (
                <Field type="text" name="name" placeholder="Nombre" />
              )}
            </span>
            <span>
              Apellidos:
              {disabled ? (
                <>{userState.rol}</>
              ) : (
                <Field type="text" name="lastname" placeholder="Apellido" />
              )}
            </span>

            <span>
              Cel:{" "}
              {disabled ? (
                <>+1 11111111</>
              ) : (
                <Field type="text" name="cel" placeholder="Cel" />
              )}
            </span>
            <span>
              Email:{" "}
              {disabled ? (
                <>{userState.gender}</>
              ) : (
                <Field type="text" name="email" placeholder="Email" />
              )}
            </span>
            <span>
              Ciudad:{" "}
              {disabled ? (
                <>{userState.location.name}</>
              ) : (
                <Field type="text" name="ciudad" placeholder="Ciudad" />
              )}
            </span>
            <span>
              Tipo de cuenta: <>{userState.rol}</>
            </span>

            {!disabled ? (
              <Button
                label={"Actualizar datos"}
                disabled={disabled}
                onClick={handleUpdate}
                type={"submit"}
              />
            ) : (
              <Button label={"Editar"} disabled={!disabled} onClick={toggle} />
            )}

            {showModal ? (
              <Modal
                onClose={handleClose}
                onSubmit={submitForm}
                showModal={showModal}
              >
                <span id="modal-children">
                  Estas seguro que deseas actualizar tus datos?
                </span>
              </Modal>
            ) : null}
          </Form>
        )}
      </Formik>
    </Layout>
  );
}

export default Privacy;
