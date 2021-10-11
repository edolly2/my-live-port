import styled from "styled-components";
const BlogNotificationContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //   display: flex;
  //   display: none;
  flex-direction: column;
  justify-content: space-evenly;
  width: 90%;
  height: 35%;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid black;
  padding: 1.6rem;
  //   box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  border-radius: 0.6rem;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 30%;
  }
`;

const BlogNotificationInfoTitle = styled.h4`
  text-align: center;
  width: 100%;
  color: gold;
  font-size: calc(24px + (24 - 12) * (100vw - 400px) / (1920 - 400));
`;

const BlogNotificationInfo = styled.p`
  text-align: center;
`;

const BlogNotificationButtonGrp = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const BlogNotificationButton = styled.button``;

const BlogNotificationInputButton = styled.input`
  font-size: 1.8rem;
`;

const BlogNotification = (props) => {
  return (
    <BlogNotificationContainer className={props.blogNotificationClass}>
      <BlogNotificationInfoTitle>ATTENTION</BlogNotificationInfoTitle>
      <BlogNotificationInfo>
        You are leaving Eric's Portfolio Website to visit Eric's Blog Website.
        Do you wish to accept?
      </BlogNotificationInfo>
      <BlogNotificationButtonGrp>
        <BlogNotificationInputButton
          className="btn"
          type="button"
          onClick={props.blogAcceptBtnClick}
          value="ACCEPT"
        />
        <BlogNotificationButton
          className="btn"
          onClick={props.blogCancelBtnClick}
        >
          CANCEL
        </BlogNotificationButton>
      </BlogNotificationButtonGrp>
    </BlogNotificationContainer>
  );
};

export default BlogNotification;
