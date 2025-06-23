interface ResultProps {
  isRejected: boolean;
}

export default function Result({ isRejected }: ResultProps) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-center p-6">
      <h1 className="text-3xl font-bold mb-4">
        {isRejected ? "We're sorry!" : "Great news!"}
      </h1>
      <p className="text-lg max-w-xl">
        {isRejected
          ? "Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which may be used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication."
          : "We have the perfect treatment for your hair loss. Proceed to "}
        {!isRejected && (
          <>
            <a
              href="https://www.manual.co"
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.manual.co
            </a>
            {", and prepare to say hello to your new hair!"}
          </>
        )}
      </p>
    </div>
  );
}
