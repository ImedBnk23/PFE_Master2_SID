import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

import sys
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing import image
from tensorflow.keras.layers import Dense

class DenseNoQuant(Dense):
    def __init__(self, *args, **kwargs):
        kwargs.pop("quantization_config", None)
        super().__init__(*args, **kwargs)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "cnn_model.h5")

model = tf.keras.models.load_model(
    MODEL_PATH,
    compile=False,
    custom_objects={"Dense": DenseNoQuant}
)

class_names = ['AK', 'BCC', 'DF', 'MEL', 'NV', 'PBK', 'SCC', 'SK', 'VL']

def predict(img_path):
    img = image.load_img(img_path, target_size=(224, 224))
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis=0)

    preds = model.predict(img, verbose=0)

    idx = np.argmax(preds)
    confidence = float(preds[0][idx])

    return class_names[idx], confidence

label, conf = predict(sys.argv[1])

print(f"{label}|{conf:.2f}", flush=True)