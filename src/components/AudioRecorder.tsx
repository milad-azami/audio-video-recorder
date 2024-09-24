import { useReactMediaRecorder } from "react-media-recorder";

// STATUS ENUM --> media_aborted | permission_denied | no_specified_media_found | media_in_use | invalid_media_constraints | no_constraints | recorder_error | idle | acquiring_media | recording | stopping | stopped
// ERROR ENUM --> media_aborted | permission_denied | no_specified_media_found | media_in_use | invalid_media_constraints | no_constraints | recorder_error

const AudioRecorder = () => {
  const {
    status,
    error,
    mediaBlobUrl,
    clearBlobUrl,
    startRecording,
    stopRecording,
  } = useReactMediaRecorder({ audio: true, askPermissionOnMount: true });

  console.log(mediaBlobUrl);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <p>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <button onClick={clearBlobUrl}>Clear Blob Url</button>
      <audio src={mediaBlobUrl} controls autoPlay loop />
    </div>
  );
};

export default AudioRecorder;
