const AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
    const task = event.task || "Default Task";
    const message = `Task created: ${task}`;

    // Publish to SNS
    const params = {
        TopicArn: 'arn:aws:sns:us-east-1:605203259214:TaskMessagingStack-TaskTopic-L11ruwzrtkZ6', // Replace with your TopicArn from Hour 1
        Message: message
    };
    await sns.publish(params).promise();

    return {
        statusCode: 200,
        body: JSON.stringify({ message })
    };
};