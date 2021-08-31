import LoginForm from '../components/LoginForm/LoginForm';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function LoginView() {
  return (
    <>
      <LoginForm />
    </>
  );
}
