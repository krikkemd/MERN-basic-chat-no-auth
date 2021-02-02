const { ChatMessage } = require('../schemas/ChatMessage');

exports.getAllChatMessages = async (req, res) => {
  try {
    const chatMessages = await ChatMessage.find();
    return res.status(200).json({
      status: 'success',
      results: chatMessages.length,
      chatMessages,
      // JSEND
      // data: {
      //   chatMessages,
      // },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: 'error',
    });
  }
};

exports.createChatMessage = async (req, res) => {
  try {
    const newMessage = await ChatMessage.create({
      body: req.body.body,
      username: req.body.username,
      userId: req.body.userId,
      sender: req.body.sender,
      type: req.body.type,
    });

    console.log('✅ chat message created');
    // console.log(newMessage);

    // return newMessage;
    return res.status(201).json({
      status: 'success',
      test: 'hallo',
      newMessage,
    });
  } catch (err) {
    console.error(err);
  }
};

exports.deleteChatMessage = async (req, res) => {
  const chatMessageId = req.params.id;

  try {
    await ChatMessage.deleteOne({ _id: chatMessageId }, err => {
      if (err) console.error(err.message);

      console.log('❌ chat message deleted');

      return res.status(204).json({
        status: 'success',
      });
    });
  } catch (err) {
    return res.status(500).json({
      status: 'error',
      error: err.message,
    });
  }
};

const checkDocExists = async docId => {
  await ChatMessage.exists({ _id: docId }, (err, res) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        status: 'error',
        error: err.message,
      });
    } else {
      console.log(res);
    }
  });
};
