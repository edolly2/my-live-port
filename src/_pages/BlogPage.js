import BlogNotification from "../_components/BlogNotification";
import PageTitle from "../_components/PageTitle";
import styled from "styled-components";
import { useState } from "react";

const BlogPageContainer = styled.main`
  width: 75%;
  min-height: 76vh;
  margin: 0 auto;
`;
const BlogPageSubTitle = styled.h3`
  margin: 7rem 0 3.2rem 0;
  color: gold;
`;
const BlogPageInfo = styled.p`
  margin-bottom: 3.2rem;
`;
const BlogPageButton = styled.button``;

const BlogPage = () => {
  const [blogNotification, setBlogNotification] = useState(false);
  console.log(blogNotification);
  return (
    <BlogPageContainer>
      <PageTitle titleText="BLOG" />
      <BlogPageSubTitle>I appreciate your interest!</BlogPageSubTitle>
      <BlogPageInfo>
        If you would like to continue to view or become a member of my blog,
        please click the button below. Else you are more than welcome to explore
        my portfolio more and offer any insights, questions, comments, or
        concerns you may have. I appreciate your time!
      </BlogPageInfo>
      <BlogPageButton
        className="btn"
        onClick={() => {
          setBlogNotification(true);
        }}
      >
        VISIT
      </BlogPageButton>
      <BlogNotification
        blogNotificationClass={
          blogNotification ? "show-blog-notification" : "hidden"
        }
        blogAcceptBtnClick={() => {
          window.location.href = "https://www.google.com";
        }}
        blogCancelBtnClick={() => {
          setBlogNotification(false);
        }}
      />
    </BlogPageContainer>
  );
};

export default BlogPage;
