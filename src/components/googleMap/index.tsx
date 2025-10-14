const GoogleMap = () => {
  return (
    <iframe
      className="mt-4 rounded-lg w-full h-72"
      src="https://www.google.com/maps?q=48.65638160038468,34.33310460857509&z=15&output=embed"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GoogleMap;
