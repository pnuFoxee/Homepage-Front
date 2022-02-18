import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  ViewGridIcon,
  ChatAltIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/solid';

//local
import ipAPI from 'API/v1/ip';
import commentAPI from 'API/v1/comment';
const Comments = ({ boardId: boardId, state }) => {
  const [comments, setComments] = useState([]);
  const [commentAddFlag, setCommentAddFlag] = useState(false);
  const [content, setContent] = useState('');
  const [subContent, setSubContent] = useState('');
  const [focusedComment, setFocusedComment] = useState();
  const [isView, setIsView] = useState(false);
  const [dislikedComments, setDislikedComments] = useState([]); //싫어요 표시한 댓글의 리스트
  const [likedComments, setLikedComments] = useState([]); //좋아요 표시한 댓글의 리스트
  const isDark = state.darkMode;
  const token = state.member.token;
  const myId = state.member.userInfo.id;

  useEffect(() => {
    commentAPI
      .get({
        boardId: boardId,
        token: token,
      })
      .then((res) => {
        setComments(res.list);
      });
  }, [isDark, commentAddFlag]);

  const commentContentHandler = (e) => {
    setContent(e.target.value);
  };
  const subCommentContentHandler = (e) => {
    console.log(e.target.value);
    setSubContent(e.target.value);
  };
  const deleteCommentHandler = (id) => {
    commentAPI
      .remove({
        commentId: id,
        token: token,
      })
      .then((res) => {
        if (res.success) {
          console.log('delete comment');
          setCommentAddFlag(!commentAddFlag);
        } else {
          alert('댓글 삭제 실패!');
        }
      });
  };
  const addSubCommentHandler = (parentId = 0) => {
    console.log('addSubCommentHandler');
    ipAPI.getIp().then((ipAddress) => {
      commentAPI
        .create({
          boardId: boardId,
          content: subContent,
          ipAddress: ipAddress,
          parentId: parentId,
          token: token,
        })
        .then((res) => {
          if (res.success) {
            setCommentAddFlag(!commentAddFlag);
            setSubContent('');
          } else {
            alert('댓글 달기 실패! 전산관리자에게 문의하세요~');
          }
        });
    });
  };
  const addCommentHandler = () => {
    console.log('addCommentHandler');
    ipAPI.getIp().then((ipAddress) => {
      commentAPI
        .create({
          boardId: boardId,
          content: content,
          ipAddress: ipAddress,
          token: token,
        })
        .then((res) => {
          if (res.success) {
            setCommentAddFlag(!commentAddFlag);
            setContent('');
          } else {
            alert('댓글 달기 실패! 전산관리자에게 문의하세요~');
          }
        });
    });
  };
  const displayInput = (id) => {
    //대댓글 버튼 클릭시 대댓글 입력 창이 보였다가 안 보였다가 할 수 있도록
    if (focusedComment != id) setIsView(true);
    else setIsView(!isView);
    setFocusedComment(id);
    setSubContent('');
    //console.log(isView);
  };
  const clickLikeHandler = (id) => {
    //댓글에 좋아요 버튼 눌렀을 경우
    if (likedComments.filter((a) => a == id).length == 0) {
      commentAPI
        .like({
          commentId: id,
          memberId: myId,
          token: token,
        })
        .then((res) => {
          console.log(res);
          setLikedComments([...likedComments, id]);
        });
    } else {
      setLikedComments(likedComments.filter((a) => a != id));
    }
  };
  const clickDislikeHandler = (id) => {
    //댓글에 싫어요 버튼 눌렀을 경우
    if (dislikedComments.filter((a) => a == id).length == 0) {
      commentAPI
        .dislike({
          commentId: id,
          memberId: myId,
          token: token,
        })
        .then((res) => {
          console.log(res);
          setDislikedComments([...dislikedComments, id]);
        });
    } else {
      setDislikedComments(dislikedComments.filter((a) => a != id));
    }
  };
  const isClicked = (like, id) => {
    if (like == 'like') {
      if (likedComments.filter((a) => a == id).length == 0) return 'none';
      return 'currentColor';
    } else {
      if (dislikedComments.filter((a) => a == id).length == 0) return 'none';
      return 'currentColor';
    }
  };

  const filterParentComment = (comments) => {
    return comments.filter((comment) => comment.parentId == 0);
  };
  const filterChildComment = (comments, id) => {
    return comments.filter((comment) => comment.parentId == id);
  };
  return (
    <div className="dark:text-mainWhite">
      <p className="text-2xl">
        <strong>
          <ChatAltIcon className="inline-block h-10 w-10 text-mainYellow" />
          댓글({comments.length})
        </strong>
      </p>

      <div name="댓글 리스트">
        {filterParentComment(comments).map((comment) => (
          <div
            key={comment.id}
            name="댓글"
            className=" border-b-2 flex border-b my-2 pb-2"
          >
            <img
              src={
                'https://avatars.githubusercontent.com/u/23546441?s=400&u=db7abf2929e5518c12189034dc3fed9bda94f0a6&v=4'
              }
              className="mr-4 mt-2 rounded-full shadow-lg flex-shrink-0 border-4 h-[10%] w-[10%] max-w-[5em] text-mainYellow"
            />
            <div className="border-2 rounded-lg shadow-sm inline-block p-1 w-full">
              <div className="flex justify-between">
                <h4 className="inline-block border font-bold bg-slate-200 rounded-lg px-1">
                  {comment.writer}
                </h4>
                <div>
                  <button
                    name="댓글 추천 버튼"
                    className="mx-1 text-red-400 text-xs sm:text-base hover:text-red-500"
                    onClick={() => clickLikeHandler(comment.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill={isClicked('like', comment.id)}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                  </button>
                  <button
                    name="댓글 비추천 버튼"
                    className="border mx-1 text-blue-400 text-xs sm:text-base hover:text-blue-500"
                    onClick={() => clickDislikeHandler(comment.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill={isClicked('dislike', comment.id)}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                      />
                    </svg>
                  </button>
                  <button
                    className="border mx-1 text-mainYellow text-xs sm:text-base hover:text-pointYellow"
                    onClick={() => displayInput(comment.id)}
                  >
                    <PencilIcon className="inline-block h-5 w-5" />
                    대댓글
                  </button>

                  {myId == comment.writerId ? (
                    <button
                      onClick={() => deleteCommentHandler(comment.id)}
                      className="mx-1 text-red-400 text-xs sm:text-base hover:text-red-600"
                    >
                      <TrashIcon className="inline-block h-5 w-5" />
                      삭제
                    </button>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <p className="mt-1 px-3">{comment.content}</p>
              <div
                name="대댓글 작성창"
                className={
                  (isView && focusedComment == comment.id ? '' : 'hidden') +
                  ' flex pr-2 mb-1'
                }
              >
                <textarea
                  value={subContent}
                  onChange={subCommentContentHandler}
                  className="resize-none border-2 border-divisionGray m-2 p-1 w-full h-20 rounded-md focus:ring-slate-400 focus:border-slate-400 dark:bg-darkComponent dark:border-darkComponent dark:text-white"
                ></textarea>
                <button
                  className="border-4 border-slate-400 my-1 p-2 pr-3 rounded-xl hover:shadow-lg text-slate-400 active:mt-3 active:mb-1 active:shadow-none"
                  onClick={() => {
                    addSubCommentHandler(comment.id, subContent);
                  }}
                >
                  <PencilIcon className="inline-block m-1 h-5 w-5 " />
                  <strong>COMMENT</strong>
                </button>
              </div>
              {filterChildComment(comments, comment.id).map((childCom) => (
                <div
                  key={childCom.id}
                  name="대댓글"
                  className="border-b border-slate-200 p-2 flex w-full bg-slate-50 rounded-lg"
                >
                  <img
                    src={
                      'https://avatars.githubusercontent.com/u/23546441?s=400&u=db7abf2929e5518c12189034dc3fed9bda94f0a6&v=4'
                    }
                    className="mr-4 rounded-full shadow-lg flex-shrink-0 border-2 border-slate-300 h-[10%] w-[10%] max-w-[3em] text-mainYellow"
                  />
                  <div className="w-full">
                    <div className=" flex justify-between">
                      <h4 className="inline-block text-xs font-bold rounded-lg">
                        {childCom.writer}
                      </h4>
                      {myId === childCom.writerId ? (
                        <button
                          onClick={() => deleteCommentHandler(childCom.id)}
                          className="mx-1 text-red-400 text-xs sm:text-base hover:text-red-600"
                        >
                          <TrashIcon className="inline-block Sh-5 w-5" />
                          삭제
                        </button>
                      ) : (
                        ''
                      )}
                    </div>
                    <p className="mt-1 px-3 text-slate-500 text-xs">
                      {childCom.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div name="댓글 작성 창">
        <textarea
          value={content}
          onChange={commentContentHandler}
          className="resize-none border-2 border-divisionGray m-2 p-1 w-full h-32 rounded-md focus:ring-mainYellow focus:border-mainYellow dark:bg-darkComponent dark:border-darkComponent dark:text-white"
        ></textarea>
        <div className="flex justify-end">
          <button
            className="border-4 border-mainYellow my-2 p-2 pr-3 rounded-lg hover:shadow-lg text-mainYellow active:mt-3 active:mb-1 active:shadow-none"
            onClick={addCommentHandler}
          >
            <PencilIcon className="inline-block m-1 h-5 w-5 " />
            <strong>COMMENT</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, OwnProps) => {
  return { state };
};

export default connect(mapStateToProps)(Comments);
