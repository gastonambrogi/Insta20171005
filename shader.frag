uniform vec2 u_resolution;
uniform float u_time;
const int NUM = 10;
uniform float freq[10];

void main(){
	vec3 color;
	for(int i = 0; i < NUM; i++){
		vec2 st = gl_FragCoord.xy / u_resolution;
		st.y -= 0.5;
		st.y += sin(st.x * freq[i] + u_time) * 0.2 * sin(u_time * freq[i] * 0.1);
		color += vec3(1.0 - pow(abs(st.y), 0.75/float(NUM)));
		gl_FragColor = vec4(color.r * 0.5, color.g * 0.5, color.b * 1.0, 1.0);
	}
}