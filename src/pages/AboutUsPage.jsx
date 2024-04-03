export const AboutUsPage = ({ aboutUs }) => {
  return (
    <div className="container my-4">
      <h4>Acerca de</h4>
      <p>{aboutUs.desc}</p>
    </div>
  );
};
