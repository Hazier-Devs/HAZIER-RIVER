#pragma header

vec3 mainColor = vec3(0.192, 0.69, 0.82);
float treshold = 0.002;

void main() {
    vec4 color = flixel_texture2D(bitmap, openfl_TextureCoordv);
    float refColor = (color.r + color.g + color.g) / 3;

    if (color.a > 0.0) {
        if (refColor <= treshold) {
            color = vec4(vec3(1., 1., 1.), color.a);
        } else {
            color = vec4(mainColor, color.a);
        }
    }

    gl_FragColor = color;
}