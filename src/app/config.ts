export class Config{
	//private static hostUrl='http://google.localhost:8080/'	;
	private static hostUrl='/'	;
	public static ideasUrl = 'get-ideas/'
	public static ideaUrl = 'getIdea/'

	static getHostUrl() :string{
		return Config.hostUrl;
	}
}