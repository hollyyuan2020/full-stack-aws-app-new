exports.handler = async (event) => {
              for (const record of event.Records) {
                  const message = record.Sns.Message;
                  console.log(`Processed task update: ${message}`);
              }
              return {
                  statusCode: 200,
                  body: JSON.stringify({ message: "Task updates processed" })
              };
          };