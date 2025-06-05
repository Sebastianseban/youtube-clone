import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Rohit Kumar",
    text: "This video really helped me understand the concept better. Thanks a lot!",
    replies: [],
  },
  {
    name: "Sneha Sharma",
    text: "Can someone explain the part at 5:32? I didn't quite get it.",
    replies: [
      {
        name: "Rahul Verma",
        text: "She was talking about how closures retain access to outer scope variables.",
        replies: [],
      },
      {
        name: "Anjali Nair",
        text: "Check out MDN docs. They explain closures really well.",
        replies: [
          {
            name: "Sneha Sharma",
            text: "Thanks Anjali! That helped a lot 🙌",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "DevTech Bytes",
    text: "🔥🔥 Solid explanation! Subscribed instantly!",
    replies: [],
  },
  {
    name: "Meera Joshi",
    text: "Your way of teaching is so clear. Better than many paid courses!",
    replies: [
      {
        name: "Akshay Saini",
        text: "Thank you so much Meera! Appreciate the support ❤️",
        replies: [],
      },
    ],
  },
  {
    name: "Amit Thakur",
    text: "Legend watching in 2025 💪",
    replies: [],
  },
  {
    name: "TechBro Code",
    text: "Is this part of a playlist? Would love to binge the full series.",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="text-lg text-black font-bold">Commets:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
