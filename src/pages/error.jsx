import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 text-center">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Oops!</h1>
      <p className="text-lg text-gray-600 mb-2">Maaf, terjadi kesalahan yang tidak terduga.</p>
      <div className="text-xl font-mono text-red-600  mb-8">{error.statusText || error.message}</div>
    </div>
  );
};

export default ErrorPage;
