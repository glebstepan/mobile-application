import React from 'react';
import { camera, trash, close } from 'ionicons/icons';
import {
    IonButtons,
    IonBackButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    useIonViewDidEnter,
    useIonViewDidLeave,
    IonLabel,
    IonGrid,
    IonRow,
    IonImg,
    IonCol,
    IonFab,
    IonFabButton,
    IonIcon
  } from "@ionic/react";
import { usePhotoGallery } from '../../hooks/usePhotoGallery';
import ExploreContainer from '../../components/ExploreContainer';
import './Tab2.css';


const Tab2: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg src={photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
