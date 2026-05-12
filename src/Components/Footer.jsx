export const Footer = () => {
  return (
    <footer>
      <div>

        {/* footer list */}
        <div>

            {/* footer about */}
            <div>
          <img src="images/cyclistlogo.svg" alt="logo" />
          <p>
            Cyclist is a mobility app that connects riders with trusted drivers
            for rides and deliveries, powered by seamless wallet payments.
          </p>
          </div>

          {/* lists */}
          <div>
            <ol>
                <li>Features</li>
                <li>Security</li>
                <li>FAQ</li>
            </ol>

            <ol>
                <li>About</li>
                <li>FAQ</li>
                <li>How it Works</li>
                <li>Features</li>
            </ol>

            <ol>
                <li>Privacy</li>
                <li>Terms of Service</li>
            </ol>
          </div>
        </div>

        {/* copyright */}
        <div className="flex">
          <img src="images/iconoir_facebook.svg" alt="facebook" />
          <img src="images/iconoir_instagram.svg" alt="instagram" />
          <img src="images/iconoir_linkedin.svg" alt="linkedin" />
        </div>{" "}
      </div>

      <div></div>
    </footer>
  );
};
