import { Opportunities } from "../../components/opportunities";

export const Home = () => {
  return (
    <>
      <div className="info_container">
        <h1 className="info_title">Projects</h1>
        <p className="info_description">
          From configuration to security, web apps to big data—whatever the
          infrastructure needs of your application may be, there is a Spring
          Project to help you build it. Start small and use just what you
          need—Spring is modular by design.
        </p>
      </div>
      <Opportunities />
    </>
  );
};
