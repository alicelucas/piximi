import * as React from 'react';
import styles from './ImageViewer.css';
import Grid from '@material-ui/core/Grid';
import { ImageViewerAppBar, ImageViewerExposureDrawer } from '..';
import { ImageCanvas } from '..';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

type ImageViewerProps = {
  src: any;
  imgIdentifier: any;
  saveEditsGlobally: any;
  onClose: any;
  images: any;
};

export const ImageViewer = (props: ImageViewerProps) => {
  const classes = useStyles({});

  const [exposureDrawerToggled, setExposureDrawerToggled] = React.useState(
    true
  );
  const [brightness, setBrightness] = React.useState(100);
  const [contrast, setContrast] = React.useState(100);
  const [unselectedChannels, setUnselectedChannels] = React.useState([]);

  const { src, imgIdentifier, onClose, images } = props;

  const toggleExposureDrawer = () => {
    setExposureDrawerToggled(!exposureDrawerToggled);
  };

  const saveEdits = () => {};

  return (
    <div className={classes.root}>
      <ImageCanvas
        src={src}
        height={500}
        width={500}
        brightness={brightness}
        contrast={contrast}
        unselectedChannels={unselectedChannels}
      />

      <ImageViewerAppBar
        imgIdentifier={imgIdentifier}
        saveEditsGlobally={saveEdits}
        onClose={onClose}
        images={images}
      />

      <ImageViewerExposureDrawer
        onClose={toggleExposureDrawer}
        open={exposureDrawerToggled}
        src={src}
        imgIdentifier={imgIdentifier}
        setBrightness={setBrightness}
        brightness={brightness}
        setContrast={setContrast}
        contrast={contrast}
        setUnselectedChannels={setUnselectedChannels}
        unselectedChannels={unselectedChannels}
      />
    </div>
  );
};